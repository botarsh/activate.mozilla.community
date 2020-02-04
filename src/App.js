import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import store from './store';

import './App.css';
import './title.css';
import './text.css';
import './colors.css';
import './button.css';
import './content-contained.css';

import history from './history';
import Content from './Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/FAQ';
import ActivitiesList from './components/Activities/ActivitiesList';
import CampaignsListing from './components/Campaigns/CampaignsListing';
import EventGuide from './components/EventGuide';
import NewsletterPage from './components/NewsletterPage';
import NotFound from './components/NotFound';

import CommonVoice from './components/Activities/CommonVoice';
import Nightly from './components/Activities/Nightly';
import WebExtensions from './components/Activities/WebExtensions';
import RustHack from './components/Activities/RustHack';
import WebVRCamp from './components/Activities/WebVRCamp';
import WebcompatSprint from './components/Activities/WebcompatSprint';

import { ADD_CURRENT_CAMPAIGN, ADD_UPCOMING_CAMPAIGNS } from './actions/campaign';

// eslint-disable-next-line prefer-const
let activeCampaigns = null;

// Campaign exists.
// Comment out the following definition, if no active Campaign exists.

activeCampaigns = [{
  titleImage: '/images/firefox-voice.png',
  titleKey: 'firefox-voice-sprint-title',
  descriptionKey: 'firefox-voice-sprint-description',
  durationKey: 'firefox-voice-sprint-duration',
  buttonKey: 'current-campaign-learn-more',
  linkTarget: 'https://events.mozilla.org/firefoxvoicecampaign',
}];

// eslint-disable-next-line prefer-const
let upcomingCampaigns = null;

// Comment out the following definition, if no upcoming campaign exists.
// upcomingCampaigns = [
//   {
//     titleImage: '/images/firefoxaccounts.png',
//     titleKey: 'firefoxaccounts-sprint-title',
//     descriptionKey: 'firefoxaccounts-sprint-description',
//     durationKey: 'firefoxaccounts-sprint-duration',
//     buttonKey: 'current-campaign-learn-more',
//     linkTarget: 'https://mozilla.github.io/firefox-accounts-campaign/',
//   }
// ];

class App extends Component {
  componentDidMount () {
    store.dispatch({
      type: ADD_CURRENT_CAMPAIGN,
      payload: activeCampaigns,
    });

    store.dispatch({
      type: ADD_UPCOMING_CAMPAIGNS,
      payload: upcomingCampaigns,
    });
  }

  render () {
    return (
      <Router history={history}>
        <main>
          <Header/>

          <Switch>
            {/* TODO: This is not ideal, we should write our own component that returns both the normal
                and localized path route.
            */}
            <Route exact path='/' component={Home}/>

            <Route path='/activities' component={ActivitiesList}/>
            <Route path='/campaigns' component={CampaignsListing}/>
            <Route path='/commonvoice' component={CommonVoice}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/eventguide' component={EventGuide}/>
            <Route path='/newsletter' component={NewsletterPage}/>
            <Route path='/nightly' component={Nightly}/>
            <Route path='/webextensions' component={WebExtensions}/>
            <Route path='/rust-hack' component={RustHack}/>
            <Route path='/webvr-camp' component={WebVRCamp}/>
            <Route path='/webcompat-sprint' component={WebcompatSprint}/>

            <Route exact path='/:lang' render={(props) => (<Content><Home {...props} /></Content>)} />
            <Route path='/:lang/activities' render={(props) => (<Content><ActivitiesList {...props} /></Content>)} />
            <Route path='/:lang/campaigns' render={(props) => (<Content><CampaignsListing {...props} /></Content>)} />
            <Route path='/:lang/commonvoice' render={(props) => (<Content><CommonVoice {...props} /></Content>)} />
            <Route path='/:lang/faq' render={(props) => (<Content><FAQ {...props} /></Content>)} />
            <Route path='/:lang/eventguide' render={(props) => (<Content><EventGuide {...props} /></Content>)} />
            <Route path='/:lang/newsletter' render={(props) => (<Content><NewsletterPage {...props} /></Content>)} />
            <Route path='/:lang/nightly' render={(props) => (<Content><Nightly {...props} /></Content>)} />
            <Route path='/:lang/webextensions' render={(props) => (<Content><WebExtensions {...props} /></Content>)} />
            <Route path='/:lang/rust-hack' render={(props) => (<Content><RustHack {...props} /></Content>)} />
            <Route path='/:lang/webvr-camp' render={(props) => (<Content><WebVRCamp {...props} /></Content>)} />
            <Route path='/:lang/webcompat-sprint' render={(props) => (<Content><WebcompatSprint {...props} /></Content>)} />

            <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
