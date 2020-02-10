import React from "react"
import styled from "styled-components"
import Task from "./task"

const Container = styled.div`
  margin: 8px;
  border: solid 1px lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`

class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>
          {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
        </TaskList>
      </Container>
    )
  }
}

export default Column
