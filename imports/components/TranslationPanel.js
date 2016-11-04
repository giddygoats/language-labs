import React from 'react';

class TranslationPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    context = this;
    console.log('props inside TranslationPanel: ', this.props.translation)
    return (
      <div className='container'>
        <p> <b>From: </b>{context.props.translation ? context.props.translation.fromText : ''} </p>
        <p> <b>To: </b>{context.props.translation ? context.props.translation.toText : ''} </p>
        <hr/>
      </div>
    );
  }
}

export default TranslationPanel


