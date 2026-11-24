const assert = require('node:assert/strict');
const { ventas } = require('./datos');
const {
    valorVenta,
    valorVentas,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasporCiudad,
} = require('./analitica');

const unaVenta = [ventas[0]];
const sinVentas = [];
const valoresPorVenta = (arreglo) => arreglo.map(valorVenta);

assert.deepEqual(valoresPorVenta(ventas), [
    84000, 26000, 95000, 42000, 135000, 52000,
    120000, 84000, 90000, 168000, 95000, 78000,
]);
assert.deepEqual(valoresPorVenta(unaVenta), [84000]);
assert.deepEqual(valoresPorVenta(sinVentas), []);

assert.equal(valorVentas(ventas), 1069000);
assert.equal(valorVentas(unaVenta), 84000);
assert.equal(valorVentas(sinVentas), 0);

assert.equal(totalVendido(ventas), 1069000);
assert.equal(totalVendido(unaVenta), 84000);
assert.equal(totalVendido(sinVentas), 0);

assert.equal(unidadesVendidas(ventas), 23);
assert.equal(unidadesVendidas(unaVenta), 2);
assert.equal(unidadesVendidas(sinVentas), 0);

assert.equal(ventaMayor(ventas).id, 10);
assert.equal(ventaMayor(unaVenta), ventas[0]);
assert.equal(ventaMayor(sinVentas), null);

assert.equal(ticketPromedio(ventas), 1069000 / 12);
assert.equal(ticketPromedio(unaVenta), 84000);
assert.equal(ticketPromedio(sinVentas), 0);

assert.deepEqual(
    Object.fromEntries(Object.entries(ventasporCiudad(ventas)).map(([ciudad, grupo]) => [ciudad, grupo.length])),
    { Medellin: 4, Bogota: 3, cali: 1, Bogotá: 1, Cali: 2, Pereira: 1 },
);
assert.deepEqual(ventasporCiudad(unaVenta), { Medellin: [ventas[0]] });
assert.deepEqual(ventasporCiudad(sinVentas), {});

console.log('Pruebas correctas: cada función se verificó con los tres casos.');
