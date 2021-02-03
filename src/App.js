import React, { Component } from 'react';
import './App.css';
import Channel from './Channel';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='Header'>
          <Header />
        </div>

        <div className='Home'>
          <Channel title='Aaj tak' image='https://akm-img-a-in.tosshub.com/aajtak/resource/img/bemisaal-20-saal/aajtak-logo-71X52.png' link='https://www.aajtak.in/' />

          <Channel title='Ndtv' image='https://drop.ndtv.com/homepage/images/ndtvlogo23march.png' link='https://www.ndtv.com/' />

          <Channel title='Abp Live' image='https://static.abplive.com/frontend/images/ABP_logo_main.svg' link='https://www.abplive.com/' />

          <Channel title='India Today' image='https://akm-img-a-in.tosshub.com/indiatoday/../sites/all/themes/itg/logo.png' link='https://www.indiatoday.in/' />

          <Channel title='Zee News' image='https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png' link='https://zeenews.india.com/' />

          <Channel title='RSTv' image='https://rstv.nic.in/wp-content/uploads/2016/12/rstv-logo.jpg' link='https://rstv.nic.in/' />

          <Channel title='LokSabha Tv' image='https://loksabhatv.nic.in/sites/default/files/logo.png' link='https://loksabhatv.nic.in/' />

          <Channel title='India Tv' image='https://static.indiatvnews.com/ins-web/images/sitelogo.png' link='https://www.indiatvnews.com/' />

          <Channel title='R Bharat' image='https://bharat.republicworld.com/assets/images/header/r-bharat.png' link='https://bharat.republicworld.com/livetv' />

          <Channel title='Lallantop' image='https://smedia2.intoday.in/lallantop/wp-content/uploads/2016/05/lallantop_mob.png' link='https://www.thelallantop.com/' />

          <Channel title='The Quint' image='' link='https://www.thequint.com/' />
        </div>

      </div>
    );
  }
}

export default App;
