import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import ActivityTile from './ActivityTile.js';

import './ActivitiesList.css';

class ActivitiesList extends Component {
  render () {
    const locale = this.props.currentLocales[0];

    return (
      <Localized id="activities-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <section className="container activities">
            <Localized id="activities-listing-title">
              <h1 className="title text--centered"></h1>
            </Localized>
            <div className="content-contained content-contained--small">
              <Localized id="activities-listing-description">
                <p className="text text--lead text--centered"></p>
              </Localized>
            </div>
            <div className="activities__listing">
              <Grid>
                <Row className="activity-row">
                  <ActivityTile
                    titleImage="/images/commonvoice-header.png"
                    titleKey="commonvoice-title"
                    descriptionKey="commonvoice-activity-intro"
                    tagKey="contribution"
                    durationKey="commonvoice-duration"
                    linkTarget={`/${locale}/commonvoice`}
                  />
                  <ActivityTile
                    titleImage="/images/nightly-header.png"
                    titleKey="nightly-title"
                    descriptionKey="nightly-description"
                    tagKey="testing"
                    durationKey="nightly-duration"
                    linkTarget={`/${locale}/nightly`}
                  />
                  <ActivityTile
                    titleImage="/images/webextensions-header.png"
                    titleKey="webext-title"
                    descriptionKey="webext-description"
                    tagKey="programming"
                    durationKey="webext-duration"
                    linkTarget={`/${locale}/webextensions`}
                  />
                  <ActivityTile
                    titleImage="/images/rust-header.png"
                    titleKey="rust-title"
                    descriptionKey="rust-description"
                    tagKey="programming"
                    durationKey="rust-duration"
                    linkTarget={`/${locale}/rust-hack`}
                  />
                  <ActivityTile
                    titleImage="/images/webvr-header.png"
                    titleKey="webvr-title"
                    descriptionKey="webvr-description"
                    tagKey="programming"
                    durationKey="webvr-duration"
                    linkTarget={`/${locale}/webvr-camp`}
                  />
                  <ActivityTile
                    titleImage="/images/webcompat-header.png"
                    titleKey="webcompat-title"
                    descriptionKey="webcompat-description"
                    tagKey="testing"
                    durationKey="webcompat-duration"
                    linkTarget={`/${locale}/webcompat-sprint`}
                  />
                  <ActivityTile
                    titleImage="/images/coding-header.png"
                    titleKey="coding-title"
                    tagKey="programming"
                    durationKey="coding-duration"
                    linkTarget="https://developer.mozilla.org/docs/Mozilla/Developer_guide/Introduction"
                  />
                </Row>
              </Grid>
            </div>
          </section>
        </DocumentTitle>
      </Localized>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
});

export default connect(mapStateToProps)(ActivitiesList);
