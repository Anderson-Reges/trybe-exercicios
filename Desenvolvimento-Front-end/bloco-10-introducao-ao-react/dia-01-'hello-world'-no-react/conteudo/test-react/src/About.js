import React from "react";

class About extends React.Component {
    render() {
        const skills = ['HTML', 'Node', 'Jest', 'Javascript'] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
        return (
            <div>
                <h1>Anderson Reges</h1>
                <p>Olá eu sou Anderson e trabalho com React</p>
                <h2>Minhas habilidades</h2>
                <ul>
                    {jsxSkills}
                </ul>
            </div>
        );
    }
}
export default About