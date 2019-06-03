var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            counter2: 6
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1,
            counter2: this.state.counter2 + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1,
            counter2: this.state.counter2 - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter1'},
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('span', {}, 'Licznik2 ' + this.state.counter2)
        );
    }
});

 var element = React.createElement(Counter);
  ReactDOM.render(element, document.getElementById('app'));

