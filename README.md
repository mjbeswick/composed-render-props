# styled-components-theme-helpers

A set of help functions for use with React Styled Components.

##styleString (property, value, units = 'px')
Returns a CSS style constructed from a property and value. Adds units when not supplied.

##themeProp (path, units = 'px', defaultValue = '')
Returns a CSS property value based on a styled component theme object property. Camel case keys should be used in the theme, and will be converted to CSS style properties. For use in a styled component definition.

```JavaScript
styleString('marginBottom', 10);
```

returns

```css
margin-bottom: 10px;
```

##themeStyle (path, units = 'px')

Returns a CSS style block based on a styled component theme property. Camel case keys should be used in the theme, and will be converted to CSS style properties. For use in a styled component definition.

```JavaScript
theme = {
  title: {
    margin: [10, 20],
    fontSize: 28
}


styleString('marginBottom', 10);
```

returns

```css
margin: 10px 20px;
font-size: 28px;
```

This would be used in a styled component as follows:

```JavaScript
// Styled component theme
theme = {
  navItem: {
    padding: [10, 0],

    hover: {
      backgroundColor: lightBlue
    }
  }
};

// Styled component example
const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  ${themeStyle('sideNav.navItem')};

  &:hover {
    ${themeStyle('sideNav.navItem.hover')};
  }

  ${props => (props.selected ? themeStyle('sideNav.navItem.selected') : null)};
`;
```
# composed-render-props
# composed-render-props
# composed-render-props
# composed-render-props
