var Counter = React.createClass({
    
    getDefaultProps: function(){
        console.log('Ustawianie domyślnych wartości Props // [1] Faza inicjalizacji - START');
    },

    
    getInitialState: function() {
        console.log('Stan możemy rozumieć jako wewnętrzny zestaw danych // [2] Faza inicjalizacji');
        return {
            counter: 0,
            counter2: 6
        };
    },

    componentWillMount: function(){
        console.log('Niektórzy sugerują użycie go do wykonania konfiguracji komponentu root, który można wykonać tylko w czasie wykonywania (np .: konfigurowanie połączenia Firebase) // [3] Faza inicjalizacji');
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
        console.log('tworzenie elementów htmla // [4] Faza inicjalizacji');

        return React.createElement('div', {className: 'counter1'},
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
        );
    }

    componentDidMount: function(){
        console.log('Możesz użyć componentDidMount, aby pobrać dane z serwera z wywołaniami AJAX. Jeśli chcesz zainicjować wszystko, co zależy od DOM, możesz to zrobić tutaj (np. Inicjując biblioteki innych firm, takie jak D3). Możesz dodać event listeners wewnątrz komponentu componentDidMount. // [5] Faza inicjalizacji');
    },

    componentWillReceiveProps(nextProps){
        console.log('Jeśli masz stan, który jest obliczeniem z wielu Propsow, możesz wykonać obliczenia tutaj. Nie zapomnij sprawdzić, czy odpowiednie Propsy naprawdę się zmieniły (porównaj to.props do nextProps) // [6] Faza aktualizacji');
    },

    shouldComponentUpdate(nextState, nextProps){
        console.log('Możesz sprawdzić, czy aktualizacja Propsow lub stanu naprawdę wpływa na wyjście komponentu. Aby to zrobić, możesz porównać bieżące Propsy. Jeśli składnik nie powinien zostać zaktualizowany, po prostu zwróć wartość false, a komponent nie zostanie zaktualizowany.// [7] Faza aktualizacji');
    },

    componentWillUpdate(nextProps, nextState){
        console.log('Możesz wykonać przygotowania, które należy wykonać przed aktualizacją składnika. Ta metoda cyklu życia jest wywoływana tuż przed renderowaniem (), więc nie powinieneś robić niczego, co zależy od DOM - wkrótce będzie przestarzałe. Najczęstsze przypadki użycia to: 1. ustaw zmienną na podstawie zmian stanu 2. wysyłanie wydarzeń 3.rozpoczęcie animacji// [8] Faza aktualizacji');
    },

    componentDidUpdate(prevProps, prevState){
        console.log('Dobrym przykładem może być aktualizacja biblioteki interfejsu użytkownika innej firmy, takiej jak D3, w celu przekazania nowych danych. Jest to również dobre miejsce do wykonywania żądań sieciowych, o ile porównujesz bieżący stan / Propsy z poprzednim stanem / Propsami, aby uniknąć niepotrzebnych żądań sieciowych.// [9] Faza aktualizacji');
    }

    componentWillUnmount(){
        console.log('Akcje czyszczenia. To mógłby być 1.usuwanie event listeners dodanych w componentDidMount (lub gdzie indziej) 2.anulowanie aktywnych żądań sieciowych 3.unieważnianie liczników czasu 4. czyszczenie elementów DOM utworzonych w komponencie componentDidMount // [10] Faza usuwania');
    }
});

var elements = React.createElement('div', {}, [
    React.createElement(Counter),
    React.createElement(Counter)
 ]);

ReactDOM.render(elements, document.getElementById('app'));

