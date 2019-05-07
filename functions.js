var newFollow = function (){
    var followTweet = document.getElementById('following')
    followTweet.classList.toggle('newFllw') 
}

var newInitial = function (){
    var initialTweet = document.getElementById('initialFollow')
    initialTweet.classList.replace('initial','initialNoneFollow')
    
    
}

// var newReturn = function (){
//     var initialNoneTweet = document.getElementById('initialNoneFollow')
//     initialNoneTweet.classList.replace('initialNoneFollow', 'initial')
    
// }

var avatarImg = function(){
    var avatarTweet = document.getElementById('reply')
    avatarTweet.classList.remove('reply-avatar')
}


var newInputColor = function (){
    var inputTweet = document.getElementById('placeholder-reply')
    inputTweet.classList.add('newInput')
}