function mySideBar()
{
    let barsClass=document.getElementById('bars');
    if(barsClass.name=='reorder-three-outline')
    {
        barsClass.name='close-outline';
        let sideBar=document.getElementsByClassName('sideBar')[0];
        sideBar.style="left:0%;";
        console.log(sideBar);
    }
    else
    {
        barsClass.name='reorder-three-outline';
        let sideBar=document.getElementsByClassName('sideBar')[0];
        sideBar.style="left:-100%;";
        
    }
    // alert("Hello It's Working");
}
