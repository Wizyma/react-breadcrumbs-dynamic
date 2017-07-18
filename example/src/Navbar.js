import React, { Component } from 'react'
import { Glyphicon, Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'

const TheNavbar = ({children}) => (
  <Navbar inverse collapseOnSelect>

    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">react-breadcrumbs-dynamic</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>

        <NavItem eventKey={1} href="/"><Glyphicon glyph="home" /> Home</NavItem>
        <NavItem eventKey={2} href="/profile"><Glyphicon glyph="user" /> Profile</NavItem>
        <NavDropdown eventKey={3} id="basic-nav-dropdown"
          title={
            <span><Glyphicon glyph="cog" /> Tools</span>
          }
        >
          <MenuItem eventKey={3.2} href="/tools/events"><Glyphicon glyph="calendar" /> Events</MenuItem>
          <MenuItem eventKey={3.1} href="/tools/statistics"><Glyphicon glyph="signal" /> Statistics</MenuItem>
          <MenuItem eventKey={3.3} href="/tools/settings"><Glyphicon glyph="wrench" /> Settings</MenuItem>
        </NavDropdown>

      </Nav>
      <Nav pullRight>

        <MenuItem eventKey={1}>
          <a className="github-button" data-icon="octicon-star" data-show-count="true"
            href="https://github.com/oklas/react-breadcrumbs-dynamic"
            aria-label="Star oklas/react-breadcrumbs-dynamic on GitHub">
            Star
          </a>
        </MenuItem>
        <MenuItem eventKey={2}>
          <a className="github-button" data-icon="octicon-repo-forked" data-show-count="true"
            href="https://github.com/oklas/react-breadcrumbs-dynamic/fork"
            aria-label="Fork oklas/react-breadcrumbs-dynamic on GitHub">
            Fork
          </a>
        </MenuItem>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TheNavbar

