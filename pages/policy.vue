<template>
  <div class="container">
    (주)yellowgreen은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.

	* 수집 항목 - 신청자 이름, 전화번호, 아이디, 이름, 비밀번호, 이메일, 핸드폰번호, 자료권리자 이름, 이메일, 홀세일닥터 추천자, 회사명, 대표자, 사업자등록번호, 업태, 종목, 회사주소, 전화번호, 세금계산서 수령정보, 국가, 업종, 가입여부, 설립일자, 요청사항
	* 수집목적 - 서비스 사용을 위한 신규코드 발급, 서비스 이용안내 전화 연락, 가입신청 확인 안내메일/SMS 발송
	* 보유 및 이용기간 - 가입 약관에 명시한 기간까지 보유

	위 사항에 대한 동의가 없는 경우 회사에서 제공하는 서비스를 신청하거나 가입하는 것이 불가능 할 수 있습니다.
  </div>
</template>

<script>
import auth from '~/plugins/auth'
import TheTimeLine from '~/components/TheTimeLine.vue'
import TheUserInfo from '~/components/TheUserInfo.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
