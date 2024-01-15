import LoginPage from '../../support/pages/LoginPage'
import CoursesPage from '../../support/pages/CoursesPage'
import HomePage from '../../support/pages/HomePage'
import BlogPage from '../../support/pages/BlogPage'

const login = new LoginPage();
const home = new HomePage();
const blog = new BlogPage();
const courses = new CoursesPage();

describe('Testing practicetestautomation POM', () =>{

    context('Testing login functionality with different credentials', () =>{

        beforeEach(() =>{
            cy.fixture('usuarios').as('users')
            login.visit()
        })

        it('Sends correct credentials',()=>{
            cy.get('@users').then((usuarios) =>{
                login.typeUser(usuarios[0].user)
                login.typePass(usuarios[0].password)
                login.submit()
                home.postHeader().should('be.visible')
            })
        })
        it('Sends incorrect user',()=>{
            cy.get('@users').then((usuarios) =>{
                login.typeUser(usuarios[1].user)
                login.typePass(usuarios[1].password)
                login.submit()
                login.errorMsg().should('be.visible')
                login.errorMsg().should('include.text', 'Your username is invalid!')
            })
        })
        it('Sends incorrect password',()=>{
            cy.get('@users').then((usuarios) =>{
                login.typeUser(usuarios[2].user)
                login.typePass(usuarios[2].password)
                login.submit()
                login.errorMsg().should('be.visible')
                login.errorMsg().should('include.text', 'Your password is invalid!')
                console.log('Yo tambien te amo <3')
            })
        })
    })
    context('Testing navigation', () =>{
        beforeEach(() =>{
            cy.fixture('usuarios').as('users')
            login.visit()
        })
        it('Navigates to blog page',()=>{
            cy.get('@users').then((usuarios) =>{
                login.typeUser(usuarios[0].user)
                login.typePass(usuarios[0].password)
                login.submit()
                //home.burgerMenu().should('be.visible')
                //home.clickBurgerMenu()
                home.clickBlog()
                blog.firstBlogLink().should('be.visible')
                blog.pageTwo().should('be.visible')
                blog.secondBlogLink().should('be.visible')
            })
        })
        it('Navigates to courses page',()=>{
            cy.get('@users').then((usuarios) =>{
                login.typeUser(usuarios[0].user)
                login.typePass(usuarios[0].password)
                login.submit()
                //home.burgerMenu().should('be.visible')
                //home.clickBurgerMenu()
                home.clickCouses()
                courses.postTitle().should('be.visible')
                courses.postTitle().should('include.text','Courses')
                courses.firstCourseLink().should('be.visible')
                courses.secondCourseLink().should('be.visible')
            })
        })
    })
})

