<template>
  <div class="">
      <h1>Hello, {{ title }}world</h1>
      <h1>{{ title }}는 수원장안구에 있습니다</h1>
      <p>{{ message  }}</p>
      <p v-html="message"></p>
  </div>
  <div>
    <input type="text" v-model="nickname">
  </div>
  <div>
    <input type="number" v-model="age">
  </div>
  <div>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <div>
    <label for="">
      <input type="checkbox" v-model="cbox">{{cbox}}
    </label>
    <label for="">
      <input type="checkbox" v-model="cbox2" true-value="사용중" false-value="사용중지">{{ cbox2 }}
    </label>
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label for=""><input type="checkbox" v-model="goodfood" value="마라탕">마라탕</label>
    <label for=""><input type="checkbox" v-model="goodfood" value="민트초코">민트초코</label>
    <label for=""><input type="checkbox" v-model="goodfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 좋아하는 음식은  {{goodfood}}입니다.</p>

    <p>싫어하는 음료는?</p>    
    <label for=""><input type="checkbox" v-model="badfood" value="솔의눈">솔의눈</label>
    <label for=""><input type="checkbox" v-model="badfood" value="실론티">실론티</label>
    <label for=""><input type="checkbox" v-model="badfood" value="지코">지코</label>
    <p>당신이 싫어하는 음료는 {{badfood}} 입니다.</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label for=""><input type="radio" v-model="gender" value="남">남</label>
    <label for=""><input type="radio" v-model="gender" value="여">여</label>
    <p>당신은 {{gender}}자입니다</p>
  </div>
  <h3>------속성연결------</h3>
  <div>
    <img v-bind:src='imgsrc' v-bind:title="tooltip"/>
  </div>

  <div>
    <button v-bind:disabled="show2">do it</button>
    <button v-bind:disabled="show">do it</button>
  </div>
  <div>
    <button v-bind:disabled="show2" v-bind:style="btn1">do it</button>
    <button v-bind:disabled="show" v-bind:style="btn2">do it</button>
  </div>
  <h3>------제어문------</h3>
  <div>
    <table >
      <thead>
        <tr>
          <td>제품명</td>
          <td>가격</td>
          <td>카테고리</td>
          <td>배송료</td>
        </tr>
      </thead>
        <tbody>
          <tr v-for="(item,index) in products" :key="index">
            <td>{{item.name}}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.delivery }}</td>
          </tr>
        </tbody>

    </table>
  </div>
  <div>
    <!-- v-if는 참이면 만들고 거짓이면 만들지않는다 -->
    <p v-if="true">if참일때</p>
    <p v-if="false">if거짓일때</p>
    <!-- v-show는 요소를만들고, 참이면 보여주고 거짓이면숨긴다 -->
    <p v-show="true">show참일때</p>
    <p v-show="false">show거짓일때</p>
  </div>
  <h3>------이벤트(v-on/@)------</h3>
  <div>
    <button v-on:click="increase">증가</button>
    <button v-on:click="decrease">감소</button>
    <p>conter:{{ counter }}</p>
    <input type="number" v-model="countValue">
    <button v-on:click="apply">적용</button>

    <button v-on:click="increase(),showMsg()">증가후 알림</button>
    <button v-on:click="decrease(),showMsg()">감소후 알림</button>
  </div>
  <h3>------이벤트(v-on/@)------</h3>
<div >
  <select v-model="Cityvalue" @change="changeCity">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="대구">대구</option>
    <option value="수원">수원</option>
  </select>
</div>
<div> 
  <input type="text" v-model="emailValue" @change="changeEmail" placeholder="이메일을 입력하세요" >
  <p v-if="errEmail">{{ errEmail }}</p>
</div>

<div> 
  <input type="text" v-model="pwdValue" @change="changPwd" placeholder="패스워드를 입력하세요" >
  <input type="text" v-model="pwdValue1" @change="changePwd" placeholder="패스워드를 확인하세요" >
  <p v-if="errPwd">{{ errPwd }}</p>
</div>

<div>
  <p>{{ hello() }}</p>
  <p>{{ hello() }}</p>
  <p>{{ hello() }}</p>
  <p>{{ hello2 }}</p>
  <p>{{ hello2 }}</p>
  <p>{{ hello2 }}</p>
</div>
<div>
    성: <input type="text" v-model="lastName" @input="changeLastName"><br>
    이름: <input type="text" v-model="firstName" @input="changeFirstName"><br>
    <p>method:  {{ methodFullName() }}</p>
    <p>method:  {{ methodFullName() }}</p>
    <p>computed: {{ computeFullName }}</p>
    <p>computed: {{ computeFullName }}</p>
    <p>fullName: {{fullName}}</p>
    <p>fullName: {{fullName}}</p>
  </div>

  <!-- watch -->
  <div>
    <h4>user_info : {{userInfo}}</h4>
    <input type="text" v-model="userName" >
    <input type="text" v-model="userAge" >
  </div>
  </template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return {
      Cityvalue: '서울',
      title:'연세IT',
      message:'<b>연세IT</b>는 <b><span style="color:red">5년</span></b>우수직업학교입니다',
      nickname: '돌쇠',
      age:22+3,
      city:'04',
      cbox: 'true',
      cbox2: 'false',
      goodfood:[],
      badfood:[],
      gender:'남',
      imgsrc:'https://borgssam.github.io/MySite/img/album_01.jpg',
      tooltip:'툴팁',
      show:true,
      show2:false,
      btn1:{
        backgroundColor:'blue',
        color:'yellow',
        fontSize:'32px'
      },
      btn2:{
        backgroundColor:'red',
        color:'white',
        fontSize:'32px'
      },
      products:[
      {"name":"마우스1","price":12500, "category":"PC용품","delivery":1000},
      {"name":"마우스2","price":22500, "category":"PC용품","delivery":2000},
      {"name":"마우스3","price":32500, "category":"PC용품","delivery":3000}
      ],
      counter:0,
      countValue:10,
      emailValue:'byciclethief@gmail.com',
      errEmail:'',
      errPwd:'패스워드를 입력하세요',
      pwdValue:'',
      pwdValue1:'',
      lastName:'',
      firstName:'',
      fullName:'',
      userName:'홍길동',
      userAge:'30',
      userInfo:'',
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },  watch:{
    userName(){
      this.userInfo = this.userName+'('+this.userAge+')';
    },
    // userAge(){
    //   this.userInfo = this.userName+'('+this.userAge+')';
    // },
  },
  computed:{
hello2(){
  console.log('hello2 호출')
  return 'hello,world';
},  computeFullName() {
      console.log('computeFullName 호출');
      return this.lastName + this.firstName;
    }
  },
  methods: {
    increase(){
      this.counter = this.counter +1;
    },
    decrease(){
      this.counter = this.counter -1;
    },
    apply(){
      this.counter = this.countValue;
    },
    showMsg(){
      alert('현재값 =>'+this.counter)
    },
    changeCity(){
      alert('선택하신 도시: ' +this.Cityvalue);
    },
    changeEmail(){
      this.emailValue
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(this.emailValue===''|| emailPattern.test(this.emailValue)){
        this.errEmail='';
        console.log()
      } else{
        this.errEmail='이메일 형식에 어긋납니다.';
      }
    },
    changePwd() {
      if (this.pwdValue === '') {
        this.errPwd = '패스워드를 입력하세요';
      } else if (this.pwdValue1 === '') {
        this.errPwd = '패스워드를 확인하세요';
      } else if (this.pwdValue.length < 8 ) {
        this.errPwd = '패스워드는 8자리 이상이어야 합니다';
      } else if (this.pwdValue !== this.pwdValue1) {
        this.errPwd = '패스워드가 일치하지 않습니다';
      } else {
        this.errPwd = '';
      }      
    },
    hello(){
      console.log('hello()호출')
      return'안녕하세요, 반갑습니다'
    }   ,
     changeLastName() {
      // lastName 변경 시 fullName 업데이트
      console.log('changeLastName 호출');
      this.fullName = this.lastName + this.firstName;
    },
    changeFirstName() {
      // firstName 변경 시 fullName 업데이트
      console.log('changeFirstName 호출');
      this.fullName = this.lastName + this.firstName;
    },
    methodFullName() {
      // 메소드로 fullName 계산
      console.log('methodFullName 호출');
      return this.lastName + this.firstName;
    },
    
  }
};
</script>

<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
  border: 1px solid gray;
}
table *{
  border: 1px solid gray;
}
td,th{
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
th{
  text-align: center;
  font-weight: 600;
}


</style>