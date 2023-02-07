let isDOBOpen = false;
const settingIcon = document.getElementById("icon");
const settingContent = document.getElementById("setting-content");

const toggleDOB = () =>{
    if (isDOBOpen) {
        settingContent.classList.add("hide");
    }else{
        settingContent.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
}
document.getElementById("icon").addEventListener("click", function() {
    settingIcon.addEventListener = toggleDOB();
});