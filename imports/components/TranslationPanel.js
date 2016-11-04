import React from 'react';

class TranslationPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    context = this;
    console.log('props inside TranslationPanel: ', this.props.translation)
    return (
      <div>
        <div className='translation-panel-box'>
          <p className='to-text'> {context.props.translation ? context.props.translation.toText : ''} </p>
          <p className='from-text'> {context.props.translation ? context.props.translation.fromText : ''} </p>
        </div>
        <hr className='translation-panel-line' />
      </div>
    );
  }
}

export default TranslationPanel


