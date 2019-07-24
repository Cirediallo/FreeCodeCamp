 const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
function mapDispatchToProps(dispatch){
    return {
        submitNewMessage: function(messageAdd){
            dispatch(addMessage(messageAdd))
        }
    }
}
