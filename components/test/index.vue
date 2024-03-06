<template>
  <v-container>
  
      <div class="boxitem">
        <div v-for="item in Profile" :key="item.id" class="main">
          <div class="img">
            <v-img  :src="item.img"></v-img>

          </div>
          <div class="content">
            <h3>26/10/2024</h3>
            <h1>{{ item.Name }}</h1>
            <p>{{ item.history }}</p>
          </div>
          <div class="footer">
            <div class="ft-l">
              <img
                src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/396985340_2076933232649082_3680107663976724540_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwWSPcyc3bRlXo0HGOLzeffOwIHdTodVh87Agd1Oh1WOmzYxme-_gUKogD6dU0F-_fl-rOLeCwD9Hv56ecAgxV&_nc_ohc=RSEsE5PyUqYAX93qjrM&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfAQNo_REFO0L5u0qcGfwmeFqjrWe5xCf-7FoEdBUZNeIA&oe=65503B5C"
                alt=""
              />
              <p>Moon</p>
            </div>
            <div class="ft-r">
              <p>0 commants</p>
            </div>
          </div>
          
        </div>
      </div>

  </v-container>
</template>

<script>
export default {
  name: 'IndexTest',

  data() {
    return {
      Profile: [
        {
          id: 1,
          Name: 'Goblin of Greed',
          history:
            'Goblin of Greed was a wealthy dealer with many goblin minions under his command before he lost his money in an accident. With nothing left, Goblin of Greed attempts to get wealthy like he once was. He first tried earning money by becoming a beggar and using a Pot of Duality, however he found that the method was too slow for him to become wealthy. He then tried working in housekeeping service, but almost lost everything. He was fired and started to steal Jar of Greed and then Pot of Greed. ',
          img:require('@/static/GoblinofGreed.png'),
        },

        {
          id: 2,
          Name: 'Gagagigo',
          history:
            'Gagagigo spent his younger days serving Eria the Water Charmer as her familiar. During this time, he fought alongside her and many others. While in his younger days, he was nearly eaten by some monster plants while trying to get food, but was presumingly saved by Eria. He grew up into Jigabyte and then to Gagagigo. He continued to serve as Eria s familiar for a long time until he and the Familiars of the other Charmers unleashed their full potential.',
            img:require('@/static/gagagigo.png'),   
          },
        {
          id: 3,
          Name: 'Dark Ruler Ha Des',
          history:
            'Dark King of the Abyss was a very powerful ruler of darkness. Dark Ruler Ha Des first appeared when he dethroned Dark King of the Abyss and took control of everything evil. He was a merciless tyrant who built an entire army of shadow creatures. He had his minions trust him mentally, but wasn t above on using his minions to protect him from any attacks directed at him. "Opticlops" and "Berserk Dragon" were two of many creatures that he valued the most. ',
            img: require('@/static/DarkRulerHaDes.png'),
          },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.boxitem{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
}

.main {
  margin: 2rem auto;
  width: 400px;
  height: 650px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  /*overflow: hidden;*/
  position: relative;
  align-items: center;
  
}

.img {
  height: 250px;
  background: rgb(248, 0, 0);
  overflow: hidden;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: relative;
}
.img img {
  width: 100%;
  height: 100%;
}
.content {
  text-align: center;
  border-bottom: 2px solid #e5e5e5;
  height: 350px;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
.content h3 {
  border-bottom: 1px solid #b31c1c;
}
.content h1 {
  margin: 1rem 0;
}
.content p {
  color: rgb(24, 102, 102);
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.ft-l {
  display: flex;
  align-items: center;
  padding: 2rem;
}
.ft-l img {
  width: 40px;
  height: 40 px;
  border-radius: 50%;
}
.ft-l p {
  margin: 0.5rem;
}
.ft-r {
  padding: 2rem;
}
</style>
