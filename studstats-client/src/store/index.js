import { createStore } from 'vuex'

import langsJson from "../assets/langs.json"

import { server_url } from '../../auth_config.json'

export default createStore({
  //mixins:[langTools],
  state () {
    return {
      lang_id:"en",
      langs:langsJson,
      UserData:{},
      grades:[
        {"_id":"g1","value":10,"date_set":Date.now()},
        {"_id":"g2","value":12,"date_set":Date.now()}
      ],
      schools:[]
    }
  },
  mutations: {
    async setUserData (state,auth) {
      var data = await makeUser(state,auth)
      state.UserData = data
      console.log("UserData.create",data)
    },
    addSchool(state,payload) {
      state.schools.push(payload)
    },
    deleteSchool(state,payload){
      
      state.schools.splice(payload,1)
    },
    addGrade(state,payload) {
      state.grades.push(payload)
    },

    async getUserData (state,auth) {
      if(!auth.user.value)return{error:"user_authorization_failure"}
      const user_auth = auth.user.value
      var payload ={
        type:'auth',
        what:'UserData.getAllData',
          query:{
              id: user_auth.sub,
          }
      }
      const accessToken = await auth.getTokenSilently()
     
      const data = await callApi(payload,accessToken)
      if(data.error){
        if(data.error==="user_access_retrieve_by_id_failure"){
          
          var data2 = await makeUser(state,auth)
          state.UserData = data2.UserData
          
        }else{
          state.UserData = {}
        }
      }else{
        state.UserData = data.UserData
        
      }
     
      
      console.log("UserData.getAllData",state.UserData,state.Grades)
    },
    langChange (state,lang_id_new,boolForce) {
      if(!localStorage.lang_id){
          if(!lang_id_new)lang_id_new="en"
          localStorage.lang_id = lang_id_new
          boolForce = true
      }else{
          if(!lang_id_new)lang_id_new=localStorage.lang_id
      }
      if(state.lang_id !== lang_id_new || boolForce){
          state.lang_id= lang_id_new
          localStorage.lang_id = lang_id_new
      }
    }
  },
  getters: {
    

  },
  actions: {

    // addGrade:async function({ state },auth){
    //   //const user_auth = auth.user.value
    //   var payload ={
    //     type:'auth',
    //     what:'Grades.addGradeToUser',
    //       query:{
    //         type:"private",
    //         title:"Test Grade",
    //         icon_url:"temp_assets/grade_placeholder.svg"
    //       }
    //   }
    //   const accessToken = await auth.getTokenSilently()
    //   // TODO MAKE api.js file and call it there
    //   const data = await callApi(payload,accessToken)
    //   if(!data.error){
    //     state.Grades.push(data.Grades)
    //   }else{
    //     console.error(data)
    //   }
    // }
  },
  modules: {
  }
})

async function callApi(payload,accessToken) {
  try {
    //console.log(payload)
    const accessHeaders={
        "Content-Type": `application/json`
    }
    if(payload["type"]==="auth"){
        
        accessHeaders["Authorization"]=`Bearer ${accessToken}`
    }
    const url=`${server_url}/api/messages/`+ payload["type"]
    const response = await fetch(
        url
        ,{
            method: "POST",
            headers: accessHeaders,
            body: JSON.stringify(payload)
        }
    )
    const json = await response.json()
    return json.response
  } catch (e) {
      return {"error":e.message}
  }
}
async function makeUser(state,auth) {
  try {
    const user_auth = auth.user.value
      var payload ={
        type:'auth',
        what:'UserData.create',
          query:{
              id: user_auth.sub,
              username: user_auth.nickname,
              name_first: user_auth.name,
              name_last: user_auth.name,
              interface_lang:  state.lang_id,
              email: user_auth.email,
              active: true,
              icon_type: "google",
              icon_url: user_auth.picture
          }
      }
      const accessToken = await auth.getTokenSilently()
      // TODO MAKE api.js file and call it there
      const data = await callApi(payload,accessToken)
      return data//
  } catch (e) {
      return {"error":e.message}
  }
}
