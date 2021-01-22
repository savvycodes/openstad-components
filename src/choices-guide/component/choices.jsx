'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentChoice from './choice.jsx';

export default class OpenStadComponentChoices extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      withPercentage: false,
      minLabel: null,
      maxLabel: null,
    });

    this.choiceElements = [];

    this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: props.scores,
      answers: {},
      averageScore: { x: 51, y: 50 },
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    self.choicesClickListener = function(event) {
      self.setState({ random: Math.random() }); // force redraw
    }
		document.addEventListener('osc-choices-click', self.choicesClickListener);

  }

  componentWillUnmount() {
		document.removeEventListener('osc-choices-click', self.choicesClickListener);
  }

  calculateScores(answers) {
    let self = this;

    let scores = {};
    self.choiceElements.forEach((choiceElement) => {
      scores[choiceElement.config.divId] = choiceElement.calculateScore(answers);
    });

    self.setState({answers, scores});
    return scores;

  }

  getPreferedChoice() {

    let self = this;
    let scores = self.state.scores;
    switch (self.config.type) {
      case 'plane':
        // hardcoded voor nu, maar kan dit niet generiek over alle typen?
        console.log('==', self.state.averageScore);
        console.log('==', self.choiceElements);
        if ( self.state.averageScore.x < 50 && self.state.averageScore.y < 50 ) return self.choiceElements[0];
        if ( self.state.averageScore.x > 50 && self.state.averageScore.y < 50 ) return self.choiceElements[1];
        if ( self.state.averageScore.x < 50 && self.state.averageScore.y > 50 ) return self.choiceElements[2];
        if ( self.state.averageScore.x > 50 && self.state.averageScore.y > 50 ) return self.choiceElements[3];
        return;
        break;
        break;

      default:
        let sorted = Object.keys(scores).sort( (a,b) => scores[b].x - scores[a].x );
        let first = sorted[0];
        return self.choiceElements.find( elem => elem && elem.config.divId == first );
    }


  }

  render() {

    let self = this;

    switch (this.config.type) {

      case 'plane':

        // the position of the dot is the average of the given answers
        let score = { x: 50, y: 50 };
        let keys = Object.keys(self.state.answers);
        if (keys.length) {
          score = { x: 0, y: 0 };
          let lengths = { x: 0, y: 0, z: 0 };
          keys.forEach((key) => {
            let entry = self.state.answers[key];
            ['x','y','z'].forEach((dimension) => {
              if ( typeof entry[dimension] != 'undefined' ) {
                score[dimension] += parseInt(entry[dimension]) || 0;
                lengths[dimension]++
              }
            });        
          });
          score.x = lengths.x ? parseInt(score.x / lengths.x) : undefined;
          score.y = lengths.y ? parseInt(score.y / lengths.y) : undefined;
        }

        let baseSize = document.querySelector(`#${this.divId}`) && document.querySelector(`#${this.divId}`).offsetWidth - 1 || 180;
        let top = ( typeof score.y == 'undefined' ? 50 : score.y ) * ( baseSize / 100 );
        let left = ( typeof score.x == 'undefined' ? 50 : score.x ) * ( baseSize / 100 );

        return (
          <div id={this.divId} className="osc-choices osc-choice-plane-plane" ref={function(el) { self.planePlaneElement = el;}}>

            { Object.keys(self.props.choices).map((key, i) => {
              let choice = self.props.choices[key];
              return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } key={`choice-${choice.id}`} baseSize={baseSize} ref={function(el) { self.choiceElements[i] = el;}}/>);
            })}
            
            <div className="osc-point" style={{ top, left }}></div>
            <div style={{ clear: 'both' }}></div>
          </div>
        );

        break;

      case 'zero-to-100':
      case 'minus-to-plus-100':
      default:

        return (
          <ul className="osc-choices">
            { Object.keys(self.props.choices).map((key, i) => {
              let choice = self.props.choices[key];
              return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } key={`choice-${choice.id}`} ref={function(el) { self.choiceElements[i] = el;}}/>);
            })}
          </ul>
        );
    
    }
    

  }

}
