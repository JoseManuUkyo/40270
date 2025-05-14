export const Picture = (id) => {
  return `<figure>
      <img src="https://picsum.photos/id/${id}/200/200" alt="John Cena">
      <figcaption>John Cena Cenanation</figcaption> 
    </figure>
    <figure>    
      <img src="https://picsum.photos/id/${id}/200/200" alt="Jill Valentine">
      <figcaption>Valentine</figcaption>
    </figure>`;
};
