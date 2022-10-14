const { Collection, Item, Header } = require("postman-collection");
const fs = require("fs");
const { request } = require("http");

// Membuat Collection
const postmanCollection = new Collection({
  info: {
    name: "Dokumentasi RESTful API Challenge-04 Izaz Rizqullah",
  },
  item: [],
});

// Set Header
// const rawHeaderString =
//   "Authorization:\nContent-Type:application/json\ncache-control:no-cache";

// const rawHeader = Header.parse(rawHeaderString);

// const requestHeader = rawHeader.map((h) => new Header(h));

// Add tests for request
const requestTests = `
    pm.test("Sample Test: test for successful response", ()=>{
        pm.expect(pm.response.code).to.equal(200)
    })
`;

//Request Create User Game
const postmanRequestCreateUser = new Item({
  name: "Request Create User",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/usergame",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "alberteinstein15",
        password: "albert123",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request User Login
const postmanRequestUserlogin = new Item({
  name: "Request User Login",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/auth/login",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "alberteinstein15",
        password: "albert123",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get All User
const postmanRequestGetAllUser = new Item({
  name: "Request Get All User",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/usergame",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get One User
const postmanRequestGetOneUser = new Item({
  name: "Request Get One User",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/usergame/1",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Update User
const postmanRequestUpdateUser = new Item({
  name: "Request Update User",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/usergame/1",
    method: "PUT",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "jsbach",
        password: "jsbach123",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Delete User
const postmanRequestDeleteUser = new Item({
  name: "Request Delete User",
  request: {
    header: {
      "Content-type": "application/json",
    },
    url: "http://localhost:3000/usergame/1",
    method: "DELETE",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Create Bio
const postmanRequestCreateBio = new Item({
  name: "Request Create Bio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/bio",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        user_id: 1,
        nama: "Johan Sebastian Bach",
        alamat: "Austria",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get All Bio
const postmanRequestGetAllBio = new Item({
  name: "Request Get All Bio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/bio",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get One Bio
const postmanRequestGetOneBio = new Item({
  name: "Request Get One Bio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/bio/1",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Update Bio
const postmanRequestUpdateBio = new Item({
  name: "Request Update Bio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/bio/1",
    method: "PUT",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        user_id: 1,
        nama: "Albert Einstein",
        alamat: "Germany",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Delete Bio
const postmanRequestDeleteBio = new Item({
  name: "Request Delete Bio",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/bio/1",
    method: "DELETE",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Create History
const postmanRequestCreateHistory = new Item({
  name: "Request Create History",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/history",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        user_id: 1,
        game: "Mobile Legends",
        score: "25 - 10",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get All History
const postmanRequestGetAllHistory = new Item({
  name: "Request Get All History",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/history",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Get One History
const postmanRequestGetOneHistory = new Item({
  name: "Request Get One History",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/history/1",
    method: "GET",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Update History
const postmanRequestUpdateHistory = new Item({
  name: "Request Update History",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/history/1",
    method: "PUT",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        user_id: 1,
        game: "Mobile Legends",
        score: "20 - 05",
      }),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// Request Delete History
const postmanRequestDeleteHistory = new Item({
  name: "Request Delete History",
  request: {
    header: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUxMjIyMDF9.LuSuPubLI6xhApD7YlrVlBGWizCamwBY6Z2DZE2e6Vk",
    },
    url: "http://localhost:3000/history/1",
    method: "DELETE",
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// memasukkan kedalam collection
postmanCollection.items.add(postmanRequestCreateUser);
postmanCollection.items.add(postmanRequestUserlogin);
postmanCollection.items.add(postmanRequestGetAllUser);
postmanCollection.items.add(postmanRequestGetOneUser);
postmanCollection.items.add(postmanRequestUpdateUser);
postmanCollection.items.add(postmanRequestDeleteUser);
// --------------------------------------------------
postmanCollection.items.add(postmanRequestCreateBio);
postmanCollection.items.add(postmanRequestGetAllBio);
postmanCollection.items.add(postmanRequestGetOneBio);
postmanCollection.items.add(postmanRequestUpdateBio);
postmanCollection.items.add(postmanRequestDeleteBio);
//---------------------------------------------------
postmanCollection.items.add(postmanRequestCreateHistory);
postmanCollection.items.add(postmanRequestGetAllHistory);
postmanCollection.items.add(postmanRequestGetOneHistory);
postmanCollection.items.add(postmanRequestUpdateHistory);
postmanCollection.items.add(postmanRequestDeleteHistory);

// convert to json
const collectionJSON = postmanCollection.toJSON();

// Export to File
fs.writeFile("./collection.json", JSON.stringify(collectionJSON), (err) => {
  if (err) {
    console.log("file saved");
  }
});
