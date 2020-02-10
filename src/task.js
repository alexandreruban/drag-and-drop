import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: solid 1px lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`

class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>
  }
}

export default Task
