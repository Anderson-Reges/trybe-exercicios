import React from "react";

class Forms extends React.Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            Nome: '',
            Idade: '',
            Textarea: '',
            check: false,
            file: '',
        };
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    render() {

        return (
            <form>
                <fieldset>
                    <label>Nome
                        <input type='text' name='Nome' value={this.state.Nome} onChange={this.handleChange}></input>
                    </label>
                    <label>Idade
                        <input type='number' name='Idade' value={this.state.Idade} onChange={this.handleChange} ></input>
                    </label>
                    <textarea name='Textarea' value={this.state.Textarea} onChange={this.handleChange}></textarea>
                    <label> tai?
                        <input type='checkbox' name="check" value={this.state.check} onChange={this.handleChange}></input>
                    </label>
                    <label>
                        <input type='file' name="file" ></input>
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default Forms;