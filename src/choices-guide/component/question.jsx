'use strict';

import OpenStadComponent from '../../component/index.jsx';
import { Image as OpenStadComponentImage } from '../../image/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

export default class OpenStadComponentQuestion extends OpenStadComponent {

  constructor(props) {

    super(props);

    // defaults
    this.config.aspectRatio = this.config.aspectRatio || '16x9';

    this.questionId = props.data.id;

    this.state = {
      value: 50,
      isAnswered: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.showLightbox = this.showLightbox.bind(this);


  }

  onChangeHandler(value) {
    let state = { value: value, isAnswered: true };
    state.error = undefined;
    this.setState(state, () => {
      this.liveUpdates();
    });
  }

  isValid() {

    let data = this.props.data || {};
    let wasAlreadyAnswered = typeof data.value != 'undefined';

    if (wasAlreadyAnswered || this.state.isAnswered) return true;

    this.setState({error: 'Je hebt nog geen keuze gemaakt'});
    return false;

  }

  getAnswer() {

    if (!this.state.isAnswered) return; // null

    let data = this.props.data || {};
    let values = data.values || {};

    let dimensions = data.dimensions;
    try {
      dimensions = JSON.parse(dimensions)
    } catch (err) {}
    dimensions = dimensions || ['x'];

    // get a number between 0 and 100
    let result;
    if (typeof this.state.value == 'number' || typeof this.state.value == 'string') {
      result = {};
      if ( dimensions.includes('x') ) result.x = this.state.value;
      if ( dimensions.includes('y') ) result.y = this.state.value;
      if ( dimensions.includes('z') ) result.z = this.state.value;
    } else {
      result = {};
      if ( dimensions.includes('x') ) result.x = this.state.value.x;
      if ( dimensions.includes('y') ) result.y = this.state.value.y;
      if ( dimensions.includes('z') ) result.z = this.state.value.z;
    }

    // console.log('answer', data.title, result);

    return result;

  }

  liveUpdates() {
		var event = new window.CustomEvent('osc-choices-guide-live-updates');
		document.dispatchEvent(event);
  }

  showLightbox(startWith) {

    let data = this.props.data || {};

    let images = [
      data.values && data.values.A && data.values.A.questionImage || '',
      data.values && data.values.B && data.values.B.questionImage || '',
    ]

    let startIndex = images.findIndex( img => img == startWith );

		// dispatch an event
		var event = new window.CustomEvent('osc-show-light-box', { detail: { images, startIndex, aspectRatio: this.config.aspectRatio } });
		document.dispatchEvent(event);
    
  }

  render() {

    let self = this;
    let data = self.props.data || {};

    let isError = false;
    if (self.state.error) isError = true;

    let isAnswered = self.state.isAnswered;
    let value = typeof data.value == 'object' ? data.value.x : ( typeof data.value != 'undefined' ? data.value : 'not defined' );
    if (value === 'not defined') {
      value = this.state.value;
    } else {
      isAnswered = true;
    }

    let imageHTML = null;
    let images = data.images || [];
    if (images && images.length) {
      if (!Array.isArray(images)) images = [images];
      let image = images[0];
      imageHTML = (
        <div className={`osc-question-image-container`}>
          <OpenStadComponentImage config={{ aspectRatio: self.config.aspectRatio }} image={image}/>
        </div>
      );
    }

    let moreInfoHTML = null;
    if (data.moreInfo && ( data.moreInfo.title || data.moreInfo.text )) {
      let title = data.moreInfo.title || 'Geen titel';
      let text = data.moreInfo.text || 'Geen tekst';
      moreInfoHTML = (
        <div className="osc-accordeon">
          <div className="osc-accordeon-item osc-closed">
            <div className="osc-title osc-info">
              {title}
            </div>
            <div className="osc-description">
              {text}
            </div>
          </div>
        </div>
      );
    }
    
    let labelA = data.values && data.values.A && data.values.A.label || 'A';
    let labelB = data.values && data.values.B && data.values.B.label || 'B';
    let questionHTML = (<div className="osc-question-description"><div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>{moreInfoHTML}</div>);

    let selectorHTML = null;
    switch (data.type) {

      case 'continuous':
        selectorHTML =
          <div className="osc-question-selector">
            <OpenStadComponentForms.Slider min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: labelA }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: labelB }}></div>
          </div>
        ;
        break;

      case 'a-to-b':
        let labelBelowA = data.values && data.values.A && data.values.A.labelBelow || '';
        let labelBelowB = data.values && data.values.B && data.values.B.labelBelow || '';
        let questionTextA = data.values && data.values.A && data.values.A.questionText;
        let questionTextB = data.values && data.values.B && data.values.B.questionText;
        let questionAHTML = null, questionBHTML = null;
        if (questionTextA && questionTextB) {
          questionAHTML = (
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelA}</div><div className="osc-question-description-labeled-text">{questionTextA}</div>
              </div>
          );
          questionBHTML = (
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelB}</div><div className="osc-question-description-labeled-text">{questionTextB}</div>
              </div>
          );
          questionHTML = (
            <div className="osc-question-description">
              <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
              {questionAHTML}
              {questionBHTML}
              {moreInfoHTML}
            </div>
          );
        }
        let questionImageA = data.values && data.values.A && data.values.A.questionImage;
        let questionImageB = data.values && data.values.B && data.values.B.questionImage;
        let questionImageAHTML = null;
        let questionImageBHTML = null;
        if (questionImageA && questionImageB) {
          questionImageAHTML = (
            <div className="osc-question-description-image-container osc-question-description-image-container-a">
              <div className="osc-question-description-label osc-question-description-label-a">{labelA}</div>
              <div className={`osc-question-image-container osc-question-image-aspect-${self.config.aspectRatio}`}>
                <OpenStadComponentImage config={{ aspectRatio: self.config.aspectRatio }} image={questionImageA} onClick={ () => self.showLightbox(questionImageA) }/>
              </div>
            </div>);
          questionImageBHTML = (
            <div className="osc-question-description-image-container osc-question-description-image-container-b">
              <div className="osc-question-description-label osc-question-description-label-b">{labelB}</div>
              <div className={`osc-question-image-container osc-question-image-aspect-${self.config.aspectRatio}`}>
                <OpenStadComponentImage config={{ aspectRatio: self.config.aspectRatio }} image={questionImageB} onClick={ () => self.showLightbox(questionImageB) }/>
              </div>
            </div>);
        }
        questionHTML = (
          <div className="osc-question-description">
            <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
            {moreInfoHTML}
            {questionImageAHTML}
            {questionImageBHTML}
            <div style={{ clear: 'both', height: 15 }}></div>{/* todo dus */}
            {questionAHTML}
            {questionBHTML}
          </div>);
        selectorHTML = (
          <div className="osc-question-selector">
            <div className="osc-question-selector-label-a">{labelA}</div>
            <div className="osc-question-selector-label-b">{labelB}</div>
            <OpenStadComponentForms.Slider  min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: labelBelowA || '' }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: labelBelowB || '' }}></div>
          </div>);
        break;

      case 'enum-radio':
        selectorHTML = (
          <div className="osc-question-selector">
            { data.values && data.values.map((entry, i) => {
              let key = parseInt(1000000 * Math.random());
              let checked = false;
              if (typeof data.value == 'object') {
                checked = true;
                Object.keys(data.value).forEach((key) => {
                  if (data.value[key] !== entry.value[key]) checked = false;
                });
              } else {
                if (data.value === entry.value) checked = true;
              }
              let value = data.value != 'undefined' ? data.value : this.state.value;
              return (
                <div key={`div-value-${key}`} className="osc-radio-container">
                  <div className={`osc-radio-input${checked ? ' osc-radio-input-checked' : '' }`}>
                    <input name={`enum-radio-${data.id}`} type="radio" onChange={() => self.onChangeHandler(entry.value)} key={`button-value-${key}`}/>
                  </div>
                  <div className="osc-radio-text">{entry.text}</div>
                </div>
              );
            })}
          </div>
        );
        break;

      case 'enum-buttons':
        selectorHTML =
          <div className="osc-question-selector">
            { data.values && data.values.map((entry, i) => {
              return <button onClick={() => self.onChangeHandler(entry.value)} key={`button-value-${i}`}>{entry.text}</button>;
            })}
          </div>;
        break;

      default:
        selectorHTML = (<div>Type {data.type} is (nog) niet geimplementeerd.</div>);

    }

    let errorHTML = null;
    if (isError) {
      errorHTML = <div className="osc-error-text">{self.state.error}</div>;
    }

    return (
      <div id={self.props.config.divId} className={`osc-question osc-question-${data.type}${isError ? ' osc-error' : ''}`}>
        {imageHTML}
        <div className="osc-question-content" id={self.props.config.divId + '-content'}>
          <h3 className="osc-question-title"> {data.title}</h3>
          {questionHTML}
          {selectorHTML}
          {errorHTML}
        </div>
      </div>
    );

  }

}
