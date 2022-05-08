const profiles = [
    {
      userId: 1,
      userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
      userName: "aadarshbalika",
      userBio: "Conquering hackathons",
      isPrivate: false,
      firstName: "Aadarsh",
      lastName: "Balika",
      noOfFollower: 5,
      noOfFollowing: 5,
      following: [
        {
          userId: 3,
          userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
          userName: "raghavbang",
          firstName: "Raghav",
          lastName: "Bang",
          userBio: "WebDeveloper, in love with JS",
          isPrivate: false,
        },
        {
          userId: 4,
          userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
          userName: "ritikkapoor",
          firstName: "Ritik",
          lastName: "Kapoor",
          userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
          isPrivate: false,
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
      follower: [
        {
          userId: 3,
          userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
          userName: "raghavbang",
          firstName: "Raghav",
          lastName: "Bang",
          userBio: "WebDeveloper, in love with JS",
          isPrivate: false,
        },
        {
          userId: 4,
          userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
          userName: "ritikkapoor",
          firstName: "Ritik",
          lastName: "Kapoor",
          userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
          isPrivate: false,
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
    },
    {
      userId: 3,
      userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
      userName: "raghavbang",
      firstName: "Raghav",
      lastName: "Bang",
      userBio: "WebDeveloper, in love with JS",
      isPrivate: false,
      noOfFollower: 5,
      noOfFollowing: 5,
      following: [
        {
          userId: 1,
          userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
          userName: "aadarshbalika",
          userBio: "Conquering hackathons",
          isPrivate: false,
          firstName: "Aadarsh",
          lastName: "Balika",
        },
        {
          userId: 4,
          userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
          userName: "ritikkapoor",
          firstName: "Ritik",
          lastName: "Kapoor",
          userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
          isPrivate: false,
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
      follower: [
        {
          userId: 1,
          userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
          userName: "aadarshbalika",
          userBio: "Conquering hackathons",
          isPrivate: false,
          firstName: "Aadarsh",
          lastName: "Balika",
        },
        {
          userId: 4,
          userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
          userName: "ritikkapoor",
          firstName: "Ritik",
          lastName: "Kapoor",
          userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
          isPrivate: false,
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
    },
    {
      userId: 4,
      userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
      userName: "ritikkapoor",
      firstName: "Ritik",
      lastName: "Kapoor",
      userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
      isPrivate: false,
      noOfFollower: 5,
      noOfFollowing: 5,
      following: [
        {
          userId: 3,
          userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
          userName: "raghavbang",
          firstName: "Raghav",
          lastName: "Bang",
          userBio: "WebDeveloper, in love with JS",
          isPrivate: false,
        },
        {
          userId: 1,
          userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
          userName: "aadarshbalika",
          userBio: "Conquering hackathons",
          isPrivate: false,
          firstName: "Aadarsh",
          lastName: "Balika",
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
      follower: [
        {
          userId: 3,
          userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
          userName: "raghavbang",
          firstName: "Raghav",
          lastName: "Bang",
          userBio: "WebDeveloper, in love with JS",
          isPrivate: false,
        },
        {
          userId: 1,
          userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
          userName: "aadarshbalika",
          userBio: "Conquering hackathons",
          isPrivate: false,
          firstName: "Aadarsh",
          lastName: "Balika",
        },
        {
          userId: 5,
          userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
          userName: "tushartiwari",
          firstName: "Tushar",
          lastName: "Tiwari",
          userBio:
            "Building Perforrmant applications that are easy to maintain, scale",
          isPrivate: false,
        },
        {
          userId: 6,
          userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
          userName: "harshitadaswani",
          firstName: "Harshita",
          lastName: "Daswani",
          userBio: "Student, Aspiring Full Stack Web Developer",
          isPrivate: false,
        },
      ],
    },
    {
        userId: 5,
        userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
        userName: "tushartiwari",
        firstName: "Tushar",
        lastName: "Tiwari",
        userBio: "Building Perforrmant applications that are easy to maintain, scale",
        isPrivate: false,
        noOfFollower: 5,
        noOfFollowing: 5,
        following: [
          {
            userId: 3,
            userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
            userName: "raghavbang",
            firstName: "Raghav",
            lastName: "Bang",
            userBio: "WebDeveloper, in love with JS",
            isPrivate: false
          },
          {
            userId: 4,
            userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
            userName: "ritikkapoor",
            firstName: "Ritik",
            lastName: "Kapoor",
            userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
            isPrivate: false
          },
          {
            userId: 1,
            userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
            userName: "aadarshbalika",
            userBio: "Conquering hackathons",
            isPrivate: false,
            firstName: "Aadarsh",
            lastName: "Balika"
          },
          {
            userId: 6,
            userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
            userName: "harshitadaswani",
            firstName: "Harshita",
            lastName: "Daswani",
            userBio: "Student, Aspiring Full Stack Web Developer",
            isPrivate: false
          }
        ],
        follower: [
          {
            userId: 3,
            userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
            userName: "raghavbang",
            firstName: "Raghav",
            lastName: "Bang",
            userBio: "WebDeveloper, in love with JS",
            isPrivate: false
          },
          {
            userId: 4,
            userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
            userName: "ritikkapoor",
            firstName: "Ritik",
            lastName: "Kapoor",
            userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
            isPrivate: false
          },
          {
            userId: 1,
            userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
            userName: "aadarshbalika",
            userBio: "Conquering hackathons",
            isPrivate: false,
            firstName: "Aadarsh",
            lastName: "Balika"
          },
          {
            userId: 6,
            userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
            userName: "harshitadaswani",
            firstName: "Harshita",
            lastName: "Daswani",
            userBio: "Student, Aspiring Full Stack Web Developer",
            isPrivate: false
          }
        ]
      },
      {
        userId: 6,
        userImage: "https://i.ibb.co/ZXZ8Mr1/harshitadaswani.jpg",
        userName: "harshitadaswani",
        firstName: "Harshita",
        lastName: "Daswani",
        userBio: "Student, Aspiring Full Stack Web Developer",
        isPrivate: false,
        noOfFollower: 5,
        noOfFollowing: 5,
        following: [
          {
            userId: 3,
            userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
            userName: "raghavbang",
            firstName: "Raghav",
            lastName: "Bang",
            userBio: "WebDeveloper, in love with JS",
            isPrivate: false
          },
          {
            userId: 4,
            userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
            userName: "ritikkapoor",
            firstName: "Ritik",
            lastName: "Kapoor",
            userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
            isPrivate: false
          },
          {
            userId: 5,
            userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
            userName: "tushartiwari",
            firstName: "Tushar",
            lastName: "Tiwari",
            userBio: "Building Perforrmant applications that are easy to maintain, scale",
            isPrivate: false
          },
          {
            userId: 1,
            userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
            userName: "aadarshbalika",
            userBio: "Conquering hackathons",
            isPrivate: false,
            firstName: "Aadarsh",
            lastName: "Balika"
          }
        ],
        follower: [
          {
            userId: 3,
            userImage: "https://i.ibb.co/ZHpQV3b/raghavbang.jpg",
            userName: "raghavbang",
            firstName: "Raghav",
            lastName: "Bang",
            userBio: "WebDeveloper, in love with JS",
            isPrivate: false
          },
          {
            userId: 4,
            userImage: "https://i.ibb.co/NWhn8LF/ritikkapoor.jpg",
            userName: "ritikkapoor",
            firstName: "Ritik",
            lastName: "Kapoor",
            userBio: "Learner neogcamp | #ejs on weekends with teamtanay",
            isPrivate: false
          },
          {
            userId: 5,
            userImage: "https://i.ibb.co/Zz7VWNw/tushartiwari.jpg",
            userName: "tushartiwari",
            firstName: "Tushar",
            lastName: "Tiwari",
            userBio: "Building Perforrmant applications that are easy to maintain, scale",
            isPrivate: false
          },
          {
            userId: 1,
            userImage: "https://i.ibb.co/MPMwHY5/adarshbalika.png",
            userName: "aadarshbalika",
            userBio: "Conquering hackathons",
            isPrivate: false,
            firstName: "Aadarsh",
            lastName: "Balika"
          }
        ]
      }
  ];


  module.exports = profiles