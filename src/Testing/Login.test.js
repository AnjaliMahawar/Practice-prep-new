import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import Login, { validateEmail } from "./Login"
import { userInfo } from "os"
import exp from "constants"

test('testing for text',()=>{
    render(<Login/>)
    const text =screen.getByText('We will Test the Login Form Component')
    expect(text).toBeInTheDocument();

})
test('testing for label',()=>{
    render(<Login/>)
    const labeltest=screen.getByLabelText('Email')
    expect(labeltest).toBeInTheDocument()
    expect(labeltest).toBeTruthy() //toBeTruthy is often used as an assertion to check if a value is truthy.
    //asserts that the result is truthy. If result is a truthy value (not undefined, null, false, 0, NaN, or an empty string), the test will pass. Otherwise, it will fail.
})

describe('test the login compo',()=>{
    test('test buttons',async()=>{
        render(<Login/>)
        const buttonTesting=await screen.findAllByRole('button') //check for all buttons
        //we used async await for we getting promise in buttonTesting
        // console.log("button testing",buttonTesting)
        expect(buttonTesting).toHaveLength(2) //2 button in document
    })
    test("for email",()=>{
        const email='anjali@gmail.com'
        expect(validateEmail).not.toBe(email)  // it shoul not in document
    })
    test("password type checking",()=>{
        render(<Login/>)
        const password=screen.getByPlaceholderText('Password')
        expect(password).toHaveAttribute("type","password")
    })

})
test("reset from test",()=>{
  const {getByTestId,getByPlaceholderText}=  render(<Login/>)
  const resetBtn=getByTestId('reset')
  const email=getByPlaceholderText('Enter email')
  const password=getByPlaceholderText('Password')
  fireEvent.click(resetBtn);
  expect(email.value).toMatch('')
  expect(password.value).toMatch('')

})
// test('test for validation',()=>{
//     const {getByPlaceholderText}=render(<Login/>)
//     const submitBtn=screen.getByTestId('submit')
//     const email=getByPlaceholderText('Enter email')
//     const password=getByPlaceholderText('Password')
//     userEvent.type(email,'dipesh')
//     userEvent.type(password,'123442')
//     userEvent.click(submitBtn)
//     const userInfo=screen.getByText('dipesh@gmail.com')
//     expect(userInfo).toBeInTheDocument()
// })