import { ref } from 'vue';


 export const useShop = () => {
    const products = ref(
      [
        { 'id': 1, 'name': 'iPad 4 Mini', 'description': 'En eller annen beskrivelse av produktet', 'price': 4000, 'inventory': 2 },
        { 'id': 2, 'name': 'H&M T-skjorte hvit','description': 'En eller annen beskrivelse av produktet', 'price': 120, 'inventory': 10 },
        { 'id': 6, 'name': 'Charli XCX - Sucker CD','description': 'En eller annen beskrivelse av produktet', 'price': 200, 'inventory': 5 },
        { 'id': 4, 'name': 'Volleyball','description': 'En eller annen beskrivelse av produktet', 'price': 1090, 'inventory': 5 },
        { 'id': 5, 'name': 'Football','description': 'En eller annen beskrivelse av produktet', 'price': 800, 'inventory': 5 },
        { 'id': 6, 'name': 'Skateboard','description': 'En eller annen beskrivelse av produktet', 'price': 1200, 'inventory': 5 },
        { 'id': 7, 'name': 'Samsung curved 34-tommer','description': 'En eller annen beskrivelse av produktet', 'price': 5490, 'inventory': 5 },
        { 'id': 8, 'name': 'Steelseries Rival 3','description': 'En eller annen beskrivelse av produktet', 'price': 490, 'inventory': 5 }
      ]
    );
    const cart = ref([
    ]);

    const addToCart = (cartItem) => {3
      cart.value.push(cartItem);
    }

    return {
      products,
      cart,
      addToCart,

    };
 }


 
 
