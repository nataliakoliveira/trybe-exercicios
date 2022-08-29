import React from "react";

class About extends React.Component {
  render() {
    const skills = [ 'HTML', 'CSS', 'JS', 'TESTES UNITÁRIOS']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>
          Natália Oliveira
        </h1>
        <p>
          Sou estudante de desenvolvimento Web na Trybe e engenharia de Software na Unicesumar
        </p>
        <h2>Minhas habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    )
  }
}
export default About;