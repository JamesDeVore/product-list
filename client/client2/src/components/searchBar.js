import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchProducts } from '../actions'
import {login} from '../actions/login'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, ButtonGroup } from "reactstrap";
import { FaDollarSign, FaAws, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Cart from './Cart'

/*=====================================================
TODO: add in cart component
=====================================================*/

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", dropdownOpen: false, category: "All", sortByPrice: 1, page: 1, cartHidden: true, username: "Chelsea.Runolfsdottir", passphrase: "50zTjGKHp7ij43p" };
  }
  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })

  }
  handleFormtyping = (searchTerm) => {
    this.setState({ searchTerm });
  }
  handleUsernameTyping = (username ) => {
    this.setState({username})
  }
  handlePassphraseTyping = (passphrase) => {
    this.setState({ passphrase })
  }
  onRadioBtnClick(sortByPrice) {
    this.setState({ sortByPrice });
  }

  render() {
    return <div>
        <nav className="navbar navbar-dark bg-dark searchBar ">
          <div>
            <Link to="/products">
              <h1 className="brand">
                <FaDollarSign />
                camazon <FaAws />
              </h1>
            </Link>
            <div className="form-inline">
            <input className="form-control form-inline ml-auto" value={this.state.username} onChange={event => this.handleUsernameTyping(event.target.value)} placeholder="Username" />
            <input type="password" className="form-control ml-auto" value={this.state.passphrase} onChange={event => this.handlePassphraseTyping(event.target.value)} placeholder="Password" />
            <button className="btn btn-outline-info my-2 my-sm-0" onClick={() => this.props.login(this.state.username, this.state.passphrase)}>
              Login
            </button>
          </div>
          </div>
          <div className="form-inline ml-auto">
          <Cart />
            <input className="form-control ml-auto" value={this.state.searchTerm} onChange={event => this.handleFormtyping(event.target.value)} placeholder="Search for products" />
            <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleDropdown()}>
              <DropdownToggle caret>{`${this.state.category}`}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => this.setState({ category: "All" })}
                >
                  All
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Computers" })}
                >
                  Computers
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Electronics" })}
                >
                  Electronics
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Games" })}
                >
                  Games
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Sports" })}
                >
                  Sports
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Garden" })}
                >
                  Garden
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Grocery" })}
                >
                  Grocery
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Music" })}
                >
                  Music
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Jewelry" })}
                >
                  Jewelry
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Tools" })}
                >
                  Tools
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Health" })}
                >
                  Health
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Beauty" })}
                >
                  Beauty
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Shoes" })}
                >
                  Shoes
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Clothing" })}
                >
                  Clothing
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Toys" })}
                >
                  Toys
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Kids" })}
                >
                  Kids
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Home" })}
                >
                  Home
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Books" })}
                >
                  Books
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Movies" })}
                >
                  Movies
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Outdoors" })}
                >
                  Outdoors
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.setState({ category: "Automotive" })}
                >
                  Automotive
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <ButtonGroup>
              <Button color="success" onClick={() => this.onRadioBtnClick(-1)} active={this.state.rSelected === 1}>
                <FaDollarSign />
                <FaArrowUp />
              </Button>
              <Button color="info" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === -1}>
                <FaDollarSign />
                <FaArrowDown />
              </Button>
            </ButtonGroup>
            <Link to="/products">
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.props.fetchProducts(this.state)}>
                Search
              </button>
            </Link>
          </div>
        </nav>
      </div>;
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  user:state.user
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProducts, login }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
