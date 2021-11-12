

const socket = io();
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication()); 

const loginHTML = `
    <main class="login container">
        <div class="row">
            <div class="col-12 col-6-tablet push-3-tablet text-center heading">
            <h1 class="font-100">Log in or signup</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
                <form class="form">
                    <fieldset>
                        <input 
                            class="block" 
                            type="email" 
                            name="email" 
                            placeholder="email"
                        >
                    </fieldset>

                    <fieldset>
                        <input 
                            class="block" 
                            type="password" 
                            name="password" 
                            placeholder="password"
                        >
                    </fieldset>

                    <button type="button" id="login" class="button button-primary block signup">
                        Log in
                    </button>

                    <button 
                        type="button" 
                        id="signup" 
                        class="button button-primary block signup"
                    >
                        Sign up and log in
                    </button>

                    <a class="button button-primary block" href="/oauth/github">
                        Login with GitHub
                    </a>
                </form>
            </div>
        </div>
    </main>
`;

const chatHTML = `<main class="flex flex-column">
  <header class="title-bar flex flex-row flex-center">
    <div class="title-wrapper block center-element">
      <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
        alt="Feathers Logo">
      <span class="title">Chat</span>
    </div>
  </header>

  <div class="flex flex-row flex-1 clear">
    <aside class="sidebar col col-3 flex flex-column flex-space-between">
      <header class="flex flex-row flex-center">
        <h4 class="font-300 text-center">
          <span class="font-600 online-count">0</span> users
        </h4>
      </header>

      <ul class="flex flex-column flex-1 list-unstyled user-list"></ul>
      <footer class="flex flex-row flex-center">
        <a href="#" id="logout" class="button button-primary">
          Sign Out
        </a>
      </footer>
    </aside>

    <div class="flex flex-column col col-9">
      <main class="chat flex flex-column flex-1 clear"></main>

      <form class="flex flex-row flex-space-between" id="send-message">
        <input type="text" name="text" class="flex flex-1">
        <button class="button-primary" type="submit">Send</button>
      </form>
    </div>
  </div>
</main>`;

const escape = str => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const addUser = user => {
    const userList = document.querySelector('.user-list');
  
    if(userList) {
      // Add the user to the list
      userList.innerHTML += `<li>
        <a class="block relative" href="#">
          <img src="${user.avatar}" alt="" class="avatar">
          <span class="absolute username">${escape(user.name || user.email)}</span>
        </a>
      </li>`;
  
      // Update the number of users
      const userCount = document.querySelectorAll('.user-list li').length;
      
      document.querySelector('.online-count').innerHTML = userCount;
    }
};
  