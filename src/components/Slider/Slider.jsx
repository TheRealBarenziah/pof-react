import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Media from 'react-media'
import './slider.css'

const items = [
  {
    src: 'http://placekitten.com/899/300',
    altText: 'Kitten Placeholder1',
    title: 'Welcome to NLCats' ,
    caption: "Keep calm and enjoy the cats."
  },
  {
    src: 'http://placekitten.com/901/300',
    altText: 'Kitten Placeholder2',
    title: "Jungle Boogie" ,
    caption: 'Tame the beast. Take advantage.'
  },
  {
    src: 'http://placekitten.com/900/300',
    altText: 'Kitten Placeholder3',
    title: 'Muscle your peace' ,
    caption: 'Then back to hunt with full efficiency'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <p className="getDesktopPeeps">Smartphones and tablets ruin our planet every day.
               Because we support Mother Nature, this message will display unless you're on a civilized resolution.</p>
            ) : (
              <CarouselCaption captionText={item.caption} captionHeader={item.title} />
            )
          }
        </Media>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Slider;