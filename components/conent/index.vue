<template>
  <header>
    <div class="content-con">
      <div class="content-info">
        <h3>Yu-Gi-Oh!</h3>
        <p>
          Yu-Gi-Oh! (Japanese: 遊☆戯☆王, Hepburn: Yū-Gi-Ō!, lit. "Game King") is
          a Japanese manga series written and illustrated by Kazuki Takahashi.
          It was serialized in Shueisha's Weekly Shōnen Jump magazine between
          September 1996 and March 2004. The plot follows the story of a boy
          named Yugi Mutou, who solves the ancient Millennium Puzzle. Yugi
          awakens a gambling alter-ego or spirit within his body that solves his
          conflicts using various games. The manga series has spawned a media
          franchise that includes multiple spin-off manga and anime series, a
          trading card game, and numerous video games. Most of these
          incarnations involve the fictional trading card game known as Duel
          Monsters, where each player uses cards to "duel" each other in a mock
          battle of fantasy "monsters", forming the basis for the real life
          Yu-Gi-Oh! Trading Card Game tie in. The manga was adapted into two
          anime series; the first anime adaptation was produced by Toei
          Animation, which aired from April to October 1998, while the second,
          produced by NAS and animated by Studio Gallop titled Yu-Gi-Oh! Duel
          Monsters, aired between April 2000 and September 2004. Yu-Gi-Oh! has
          since become one of the highest-grossing media franchises of all time.
        </p>
      </div>
      <div class="content-img">
        <img
          src="https://th.bing.com/th/id/OIP.wtjzxSA6m8H53lZVr654MwHaEc?pid=ImgDet&rs=1"
        />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'IndexConent',
}
</script>

<style lang="scss" scoped>
header {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef8f5;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
.main {
  background-color: #fef8f5;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-con {
  display: flex;
}
.content-info {
  padding: 2rem;
  font-family: 'Merienda', Helvetica, Arial;
  font-size: 20px;
}
.content-info h3 {
  font-size: 2rem;
}
.content-info p {
  margin: 1rem 0;
}
.content-img {
  padding: 2rem;
}
</style>
