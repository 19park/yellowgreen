import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const usersRef = db.ref('/users')
const postsRef = db.ref('/posts')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      post: null,
      users: [],
      posts: []
    },
    getters: {
      posts: state => {
        return state.posts.map((post) => {
          post.user = state.users.find((user) => user.email === post.from)
          return post
        }).reverse()
      },
      post: state => {
        const post = state.post
        if (!post) return null
        post.user = state.users.find((user) => user.email === post.from)
        return post
      },
      users: state => state.users,
      user: state => state.user
    },
    mutations: {
      setCredential (state, { user }) {
        state.user = user
      },
      savePost (state, { post }) {
        state.post = post
      },
      setUser (state, payload) {
        state.user = payload
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL ({commit}, { user }) {
        if (!user) return
        await usersRef.child(user.email.replace('@', '_at_').replace(/\./g, '_dot_')).set({
          name: user.displayName,
          email: user.email,
          icon: user.photoURL
        })
        commit('setCredential', { user })
      },
      async INIT_SINGLE ({commit}, { id }) {
        const snapshot = await postsRef.child(id).once('value')
        commit('savePost', { post: snapshot.val() })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('posts', postsRef)
      }),
      ADD_POST: firebaseAction((ctx, { email, body }) => {
        postsRef.push({
          from: email,
          body
        })
      }),
      callAuth () {
        firebase.auth().signInWithRedirect(provider)
      },
      callAuthFacebook ({commit}) {
        return new Promise(async (resolve, reject)=>{
			  await firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
			  resolve()
		  })
      },
		callAuthEmail ({commit}, obj) {
			return new Promise(async (resolve, reject)=>{
				await firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then((user)=>{
					resolve()
					commit('setUser', user)
				}).catch((err)=>{
					reject(err)
				})
			})
		},
      signOut ({commit}) {
        firebase.auth().signOut().then(()=>{
			  commit('setUser', null)
		  }).catch(error=> console.log(error))
      }
    }
  })
}

export default createStore
