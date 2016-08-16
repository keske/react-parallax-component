# React Parallax Component

Easiest way to add scroll parallax effect on the component.

![image](https://raw.githubusercontent.com/keske/react-parallax-component/master/src/example/images/example.gif?token=ABvV0pJZwvFAa0Nrvv6LRVqxkGZb8vhcks5Wgt1WwA%3D%3D)


## Installation

`npm install react-parallax-component`

## Usage

`import ParallaxComponent from 'react-parallax-component';`


```javascript
<ParallaxComponent
  speed="0.003"
  width="300"
  top="40%"
  left="100"
>
  <div>
    Children component
  </div>
</ParallaxComponent>
```

### Props
- `speed` _(String)_ - animation speed, default: `-0.03`
- `width` _(String)_ - component width, default: `auto`
- `height` _(String)_ - component height, default: `auto`
- `top` _(String)_ - component top position, default: `inherit`
- `left` _(String)_ - component left position, default: `inherit`
- `right` _(String)_ - component top position, default: `inherit`

## Development
```
$ npm install
```

## Run app
```
$ npm start
```
And open in browser: [http://localhost:4000](http://localhost:4000)

## Build
```
$ npm run build
```