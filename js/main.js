var siteName= document.getElementById("siteName");
var siteUrl= document.getElementById("siteUrl");
var nameAlert=document.getElementById("name-alert");
var urlAlert=document.getElementById("url-alert");
var alert = document.getElementById("alert");
var sitesList=[];




if(localStorage.getItem("sites")!=null){
    sitesList=JSON.parse(localStorage.getItem("sites"))
    displayData()
  }
  


function sitesBook(){
    if( vaildName()&& vaildUrl()==true){
        var sites={
            name:siteName.value,
            url:siteUrl.value,
    
    
        }
        sitesList.push(sites);
       
        displayData()
        clearForm()
        localStorage.setItem("sites", JSON.stringify(sitesList))
    }
    else{
        alert.classList.remove("d-none")
    }
 
   

}


function clearForm(){
    siteName.value="",
    siteUrl.value=""
}


function displayData(){
    var siteContainer=""
    for(i=0  ; sitesList.length >i ; i++){

       siteContainer+= ` <tr>
        <td>${i+1}</td>
        <td>${sitesList[i].name}</td>
        <td><button class="btn bg-success text-white"><a href="${sitesList[i].url}" target="_blank" >Visit</a> </button></td>
        <td><button class="btn bg-danger text-white" onclick="deleteItem(${i})">Delete</button></td>
      </tr>
        `
    }
    localStorage.setItem("sites", JSON.stringify(sitesList))
    document.getElementById("tableBody").innerHTML=siteContainer;
   
}


function deleteItem(index){
    sitesList.splice(index,1)
    displayData()
    localStorage.setItem("sites", JSON.stringify(sitesList))
    }




   
  

    function vaildName(){
        var name=siteName.value;
        var regexName = /^\w{3,}(\s+\w+)*$/;
        if(regexName.test(name)){
            siteName.classList.add("is-valid")
            siteName.classList.remove("is-invalid")
            nameAlert.classList.add("d-none")
           return true ;

        }
        else{
            siteName.classList.add("is-invalid")
            nameAlert.classList.remove("d-none")

            return false ;
        }
    }

    function vaildUrl(){
        var url=siteUrl.value;
        var regexUrl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
        if( regexUrl.test(url)){
            siteUrl.classList.add("is-valid")
            siteUrl.classList.remove("is-invalid")
            urlAlert.classList.add("d-none")
          
           return true ;
           

        }
        else{
            siteUrl.classList.add("is-invalid")
            urlAlert.classList.remove("d-none")
            console.log(false);

            return false ;
        }
    }