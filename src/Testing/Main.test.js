import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Main from "./Main";
import exp from "constants";

//  test("test for input box",()=>{
//     render(<Main/>)
//    let checkInput= screen.getByRole("textbox")//INPUT TAG
//    let checkplaceholder=screen.getByPlaceholderText('Enter Your Name')
//    expect(checkplaceholder).toBeInTheDocument()
//    expect(checkInput).toHaveAttribute("name") // for name attribute
//    expect(checkInput).toBeInTheDocument()
//    expect(checkInput).toHaveAttribute("type","text")
//  })
// test('test new input',()=>{
//     render(<Main/>)
//     let input=screen.getByRole('textbox')
//     fireEvent.change(input,{target:{value:'a'}}); //testin of value 
//     expect(input.value).toBe("a")

// })


//hooks
// beforeAll(()=>{
//     console.log("befor all") //beforeAll hook will execute before all the test case once 
// })
// beforeEach(()=>
// {
//     console.log("before each")// befor3e each will execute before each test case 
// })
// testing for click event
// test("click event test",()=>{
//     render(<Main/>)
//     console.log("test case")
//     let buttonTest=screen.getByRole('button')
//     fireEvent.click(buttonTest)
//     expect(screen.getByText('update data')).toBeInTheDocument
// })
// afterAll(()=>{
//     console.log("after all")
// }) // after alll test case will execute after execution of all test case

// afterEach(()=>{
//     console.log("after eachh") //will execute after each test case
// })

//snapshot testing
// test('snapshot testing',()=>{
//     const compo=render(<Main/>)
//     expect(compo).toMatchSnapshot() //it creataes one snapshot file
// })
// test("test method case 1",()=>{
//     render(<Main/>)
//     const btn=screen.getByTestId('btn1')
//     fireEvent.click(btn)
//     expect(screen.getByText('update data')).toBeInTheDocument()
// })

//coustom role testing
test("custom role testing",()=>{
render(<Main/>)
const btn1=screen.getByRole('button',{name:'btn1'})//if we want to test specific btn
const btn2=screen.getByRole('button',{name:'btn2'})
const div=screen.getByRole('div')
expect(div).toBeInTheDocument()
expect(btn1).toBeInTheDocument()
expect(btn2).toBeInTheDocument()
})