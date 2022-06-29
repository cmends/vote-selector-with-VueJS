Vue.createApp({
  data() {
    return {
      candidates: [
        {
          id: '1a2',
          name: 'Zack',
          url: 'https://avatars.dicebear.com/api/miniavs/zack.svg',
          post: 'What do you call a singing laptop? A Dell!',
          votes: 10,
        },
        {
          id: '3a3',
          name: 'Patty',
          url: 'https://avatars.dicebear.com/api/miniavs/patty.svg',
          post: 'I tried to sue the airport for misplacing my luggage. I lost my case.',
          votes: 12,
        },
        {
          id: '4a2',
          name: 'Marco',
          url: 'https://avatars.dicebear.com/api/miniavs/m.svg',
          post: "Some people think prison is one word…but to robbers it's the whole sentence.",
          votes: 8,
        },
        {
          id: '7aq',
          name: 'Stephen',
          url: 'https://avatars.dicebear.com/api/miniavs/dave.svg',
          post: 'I was wondering why the frisbee was getting bigger, then it hit me.',
          votes: 8,
        },
      ],
    };
  },
  methods: {
    incrementVote(student) {
      student.votes++;
    },
    decrementVote(student) {
      if (student.votes > 0) {
       return student.votes--
      } 
    },
    
  },
  computed: {
    arrangement() {
      return this.candidates.sort((minvotes, maxvotes)=> {
        return maxvotes.votes - minvotes.votes;
      });
    },
    borderChange() {
      return votes => {
        return {'border-color': votes===0? 'red':""}
      }
    }
  },
}).mount('#app');
