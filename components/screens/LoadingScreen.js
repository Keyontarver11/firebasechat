function buildLoadingScreen() {

    $('#root').html(LoadingScreen());
    initializeLoadingScreenEventListeners();
    
    setTimeout(() => {
        session();
    }, 2000);

   
}



function LoadingScreen(user){
    const container =document.createElement('div');
    container.id = 'loading-screen';
    container.classList.add('loading-screen');

    container.innerHTML =`
    <div class='loading-screen-container'>
    <div class='loader'>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
    </div>
  </div>
  
    `;

    return container;
}

function initializeLoadingScreenEventListeners(){

}
