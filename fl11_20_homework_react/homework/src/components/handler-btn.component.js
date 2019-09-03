class FirePlace extends React.Component {
    constructor(props) {
      super(props);
      this.Clicked = this.Clicked.bind(this);
    }
  
    onSetFire() {
      this.setState({isBurning: true});
    }
  
    onSnuffOut() {
      this.setState({isBurning: false});
    }
  
    render() {
     
    }
  }
  
  
  ReactDOM.render(<FirePlace />,  document.getElementById('root'));
  