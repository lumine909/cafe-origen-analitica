const { ventas } = require('./datos');

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

function valorVentas(ventas) {
    let total = 0;
    for (const venta of ventas) {
        total += valorVenta(venta);
    }
    return total;
}

function totalVendido(ventas) {
    let total = 0;
    for (const venta of ventas) {
        total += valorVenta(venta);
    }
    return total;
}

function unidadesVendidas(ventas) {
    let total = 0;
    for (const venta of ventas) {
        total += venta.cantidad;
    }
    return total;
}

function ventaMayor(ventas) {
    let mayor = null;
    for (const venta of ventas) {
        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }
    return mayor;
}

function ticketPromedio(ventas) {
    if (ventas.length === 0) return 0;
    return valorVentas(ventas) / ventas.length;
}

function ventasporCiudad(ventas) {
    const ventasPorCiudad = {};
    for (const venta of ventas) {
        if (!ventasPorCiudad[venta.ciudad]) {
            ventasPorCiudad[venta.ciudad] = [];
        }
        ventasPorCiudad[venta.ciudad].push(venta);
    }
    return ventasPorCiudad;
}

module.exports = {
    valorVenta,
    valorVentas,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasporCiudad,
};

if (require.main === module) {
    console.log(ticketPromedio(ventas));
    console.log(ventaMayor(ventas));
    console.log(ventasporCiudad(ventas));
}
