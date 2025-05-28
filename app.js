// Base de datos SQL para cargar en memoria
const initSQL = `
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre TEXT,
  ciudad TEXT,
  edad INTEGER
);

INSERT INTO clientes (nombre, ciudad, edad) VALUES
  ('Ana', 'Madrid', 30),
  ('Luis', 'Barcelona', 25),
  ('Maria', 'Madrid', 28),
  ('Jorge', 'Valencia', 35),
  ('Elena', 'Madrid', 22),
  ('Carlos', 'Barcelona', 40),
  ('Sofia', 'Valencia', 33),
  ('Miguel', 'Madrid', 27),
  ('Laura', 'Sevilla', 31),
  ('Pedro', 'Madrid', 29);

CREATE TABLE pedidos (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER,
  fecha TEXT,
  monto INTEGER
);

INSERT INTO pedidos (cliente_id, fecha, monto) VALUES
  (1, '2023-01-10', 100),
  (2, '2023-01-11', 150),
  (1, '2023-02-05', 200),
  (3, '2023-02-10', 50),
  (4, '2023-03-15', 300),
  (5, '2023-03-20', 250),
  (6, '2023-04-01', 400),
  (7, '2023-04-15', 120),
  (8, '2023-05-10', 350),
  (9, '2023-05-20', 80);
`;

// Ejercicios iniciales
const exercises = [
  // ----------------------
  // BÁSICO (10 ejercicios)
  // ----------------------
    {
    id: 1,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar todos los clientes',
    description: 'Selecciona todas las columnas de la tabla clientes.',
    correctQuery: 'SELECT * FROM clientes',
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 2,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar solo nombres',
    description: 'Selecciona únicamente la columna nombre de todos los clientes.',
    correctQuery: 'SELECT nombre FROM clientes',
    expectedResult: [
      {nombre: 'Ana'},
      {nombre: 'Luis'},
      {nombre: 'Maria'},
      {nombre: 'Jorge'},
      {nombre: 'Elena'},
      {nombre: 'Carlos'},
      {nombre: 'Sofia'},
      {nombre: 'Miguel'},
      {nombre: 'Laura'},
      {nombre: 'Pedro'},
    ]
  },
  {
    id: 3,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar nombre y ciudad',
    description: 'Selecciona las columnas nombre y ciudad de todos los clientes.',
    correctQuery: 'SELECT nombre, ciudad FROM clientes',
    expectedResult: [
      {nombre: 'Ana', ciudad: 'Madrid'},
      {nombre: 'Luis', ciudad: 'Barcelona'},
      {nombre: 'Maria', ciudad: 'Madrid'},
      {nombre: 'Jorge', ciudad: 'Valencia'},
      {nombre: 'Elena', ciudad: 'Madrid'},
      {nombre: 'Carlos', ciudad: 'Barcelona'},
      {nombre: 'Sofia', ciudad: 'Valencia'},
      {nombre: 'Miguel', ciudad: 'Madrid'},
      {nombre: 'Laura', ciudad: 'Sevilla'},
      {nombre: 'Pedro', ciudad: 'Madrid'},
    ]
  },
  {
    id: 4,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar ciudades únicas',
    description: 'Selecciona las ciudades únicas de la tabla clientes.',
    correctQuery: 'SELECT DISTINCT ciudad FROM clientes',
    expectedResult: [
      {ciudad: 'Madrid'},
      {ciudad: 'Barcelona'},
      {ciudad: 'Valencia'},
      {ciudad: 'Sevilla'},
    ]
  },
  {
    id: 5,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar solo edades',
    description: 'Selecciona únicamente la columna edad de todos los clientes.',
    correctQuery: 'SELECT edad FROM clientes',
    expectedResult: [
      {edad: 30},
      {edad: 25},
      {edad: 28},
      {edad: 35},
      {edad: 22},
      {edad: 40},
      {edad: 33},
      {edad: 27},
      {edad: 31},
      {edad: 29},
    ]
  },
  {
    id: 6,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar id y nombre',
    description: 'Selecciona las columnas id y nombre de todos los clientes.',
    correctQuery: 'SELECT id, nombre FROM clientes',
    expectedResult: [
      {id: 1, nombre: 'Ana'},
      {id: 2, nombre: 'Luis'},
      {id: 3, nombre: 'Maria'},
      {id: 4, nombre: 'Jorge'},
      {id: 5, nombre: 'Elena'},
      {id: 6, nombre: 'Carlos'},
      {id: 7, nombre: 'Sofia'},
      {id: 8, nombre: 'Miguel'},
      {id: 9, nombre: 'Laura'},
      {id: 10, nombre: 'Pedro'},
    ]
  },
  {
    id: 7,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar id, nombre y edad',
    description: 'Selecciona las columnas id, nombre y edad de todos los clientes.',
    correctQuery: 'SELECT id, nombre, edad FROM clientes',
    expectedResult: [
      {id: 1, nombre: 'Ana', edad: 30},
      {id: 2, nombre: 'Luis', edad: 25},
      {id: 3, nombre: 'Maria', edad: 28},
      {id: 4, nombre: 'Jorge', edad: 35},
      {id: 5, nombre: 'Elena', edad: 22},
      {id: 6, nombre: 'Carlos', edad: 40},
      {id: 7, nombre: 'Sofia', edad: 33},
      {id: 8, nombre: 'Miguel', edad: 27},
      {id: 9, nombre: 'Laura', edad: 31},
      {id: 10, nombre: 'Pedro', edad: 29},
    ]
  },
  {
    id: 8,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar todas las columnas de pedidos',
    description: 'Selecciona todas las columnas de la tabla pedidos.',
    correctQuery: 'SELECT * FROM pedidos',
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 3, cliente_id: 1, fecha: '2023-02-05', monto: 200},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 9,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar solo cliente_id en pedidos',
    description: 'Selecciona únicamente la columna cliente_id de todos los pedidos.',
    correctQuery: 'SELECT cliente_id FROM pedidos',
    expectedResult: [
      {cliente_id: 1},
      {cliente_id: 2},
      {cliente_id: 1},
      {cliente_id: 3},
      {cliente_id: 4},
      {cliente_id: 5},
      {cliente_id: 6},
      {cliente_id: 7},
      {cliente_id: 8},
      {cliente_id: 9},
    ]
  },
  {
    id: 10,
    category: 'basico',
    subcategory: 'select',
    title: 'Seleccionar fecha y monto de pedidos',
    description: 'Selecciona las columnas fecha y monto de todos los pedidos.',
    correctQuery: 'SELECT fecha, monto FROM pedidos',
    expectedResult: [
      {fecha: '2023-01-10', monto: 100},
      {fecha: '2023-01-11', monto: 150},
      {fecha: '2023-02-05', monto: 200},
      {fecha: '2023-02-10', monto: 50},
      {fecha: '2023-03-15', monto: 300},
      {fecha: '2023-03-20', monto: 250},
      {fecha: '2023-04-01', monto: 400},
      {fecha: '2023-04-15', monto: 120},
      {fecha: '2023-05-10', monto: 350},
      {fecha: '2023-05-20', monto: 80},
    ]
  },

  

  // --------------------------
  // INTERMEDIO (10 ejercicios)
  // --------------------------
  {
    id: 11,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar todos los clientes',
    description: 'Selecciona todas las columnas de la tabla clientes sin orden.',
    correctQuery: 'SELECT * FROM clientes',
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ],
  },
  {
    id: 12,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar nombres de clientes',
    description: 'Selecciona solo la columna nombre de todos los clientes sin orden.',
    correctQuery: 'SELECT nombre FROM clientes',
    expectedResult: [
      {nombre: 'Ana'},
      {nombre: 'Luis'},
      {nombre: 'Maria'},
      {nombre: 'Jorge'},
      {nombre: 'Elena'},
      {nombre: 'Carlos'},
      {nombre: 'Sofia'},
      {nombre: 'Miguel'},
      {nombre: 'Laura'},
      {nombre: 'Pedro'},
    ],
  },
  {
    id: 13,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar ciudad y edad de clientes',
    description: 'Selecciona las columnas ciudad y edad de todos los clientes sin orden.',
    correctQuery: 'SELECT ciudad, edad FROM clientes',
    expectedResult: [
      {ciudad: 'Madrid', edad: 30},
      {ciudad: 'Barcelona', edad: 25},
      {ciudad: 'Madrid', edad: 28},
      {ciudad: 'Valencia', edad: 35},
      {ciudad: 'Madrid', edad: 22},
      {ciudad: 'Barcelona', edad: 40},
      {ciudad: 'Valencia', edad: 33},
      {ciudad: 'Madrid', edad: 27},
      {ciudad: 'Sevilla', edad: 31},
      {ciudad: 'Madrid', edad: 29},
    ],
  },
  {
    id: 14,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar todos los pedidos',
    description: 'Selecciona todas las columnas de la tabla pedidos sin orden.',
    correctQuery: 'SELECT * FROM pedidos',
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 3, cliente_id: 1, fecha: '2023-02-05', monto: 200},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ],
  },
  {
    id: 15,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar monto y fecha de pedidos',
    description: 'Selecciona las columnas monto y fecha de todos los pedidos sin orden.',
    correctQuery: 'SELECT monto, fecha FROM pedidos',
    expectedResult: [
      {monto: 100, fecha: '2023-01-10'},
      {monto: 150, fecha: '2023-01-11'},
      {monto: 200, fecha: '2023-02-05'},
      {monto: 50, fecha: '2023-02-10'},
      {monto: 300, fecha: '2023-03-15'},
      {monto: 250, fecha: '2023-03-20'},
      {monto: 400, fecha: '2023-04-01'},
      {monto: 120, fecha: '2023-04-15'},
      {monto: 350, fecha: '2023-05-10'},
      {monto: 80, fecha: '2023-05-20'},
    ],
  },
  {
    id: 16,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar cliente_id de pedidos',
    description: 'Selecciona solo la columna cliente_id de todos los pedidos sin orden.',
    correctQuery: 'SELECT cliente_id FROM pedidos',
    expectedResult: [
      {cliente_id: 1},
      {cliente_id: 2},
      {cliente_id: 1},
      {cliente_id: 3},
      {cliente_id: 4},
      {cliente_id: 5},
      {cliente_id: 6},
      {cliente_id: 7},
      {cliente_id: 8},
      {cliente_id: 9},
    ],
  },
  {
    id: 17,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar id y nombre de clientes',
    description: 'Selecciona las columnas id y nombre de todos los clientes sin orden.',
    correctQuery: 'SELECT id, nombre FROM clientes',
    expectedResult: [
      {id: 1, nombre: 'Ana'},
      {id: 2, nombre: 'Luis'},
      {id: 3, nombre: 'Maria'},
      {id: 4, nombre: 'Jorge'},
      {id: 5, nombre: 'Elena'},
      {id: 6, nombre: 'Carlos'},
      {id: 7, nombre: 'Sofia'},
      {id: 8, nombre: 'Miguel'},
      {id: 9, nombre: 'Laura'},
      {id: 10, nombre: 'Pedro'},
    ],
  },
  {
    id: 18,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar id y monto de pedidos',
    description: 'Selecciona las columnas id y monto de todos los pedidos sin orden.',
    correctQuery: 'SELECT id, monto FROM pedidos',
    expectedResult: [
      {id: 1, monto: 100},
      {id: 2, monto: 150},
      {id: 3, monto: 200},
      {id: 4, monto: 50},
      {id: 5, monto: 300},
      {id: 6, monto: 250},
      {id: 7, monto: 400},
      {id: 8, monto: 120},
      {id: 9, monto: 350},
      {id: 10, monto: 80},
    ],
  },
  {
    id: 19,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar ciudad de clientes',
    description: 'Selecciona solo la columna ciudad de todos los clientes sin orden.',
    correctQuery: 'SELECT ciudad FROM clientes',
    expectedResult: [
      {ciudad: 'Madrid'},
      {ciudad: 'Barcelona'},
      {ciudad: 'Madrid'},
      {ciudad: 'Valencia'},
      {ciudad: 'Madrid'},
      {ciudad: 'Barcelona'},
      {ciudad: 'Valencia'},
      {ciudad: 'Madrid'},
      {ciudad: 'Sevilla'},
      {ciudad: 'Madrid'},
    ],
  },
  {
    id: 20,
    category: 'basico',
    subcategory: 'from',
    title: 'Seleccionar fecha de pedidos',
    description: 'Selecciona solo la columna fecha de todos los pedidos sin orden.',
    correctQuery: 'SELECT fecha FROM pedidos',
    expectedResult: [
      {fecha: '2023-01-10'},
      {fecha: '2023-01-11'},
      {fecha: '2023-02-05'},
      {fecha: '2023-02-10'},
      {fecha: '2023-03-15'},
      {fecha: '2023-03-20'},
      {fecha: '2023-04-01'},
      {fecha: '2023-04-15'},
      {fecha: '2023-05-10'},
      {fecha: '2023-05-20'},
    ],
  },

  // ----------------------
  // AVANZADO (10 ejercicios)
  // ----------------------
{
    id: 21,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes de Madrid',
    description: "Selecciona todos los clientes cuya ciudad sea 'Madrid'.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad = 'Madrid'",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 22,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes mayores de 30 años',
    description: "Selecciona todos los clientes con edad mayor a 30.",
    correctQuery: "SELECT * FROM clientes WHERE edad > 30",
    expectedResult: [
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
    ]
  },
  {
    id: 23,
    category: 'basico',
    subcategory: 'where',
    title: 'Pedidos con monto mayor o igual a 100',
    description: "Selecciona todos los pedidos cuyo monto sea mayor o igual a 100.",
    correctQuery: "SELECT * FROM pedidos WHERE monto >= 100",
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 3, cliente_id: 1, fecha: '2023-02-05', monto: 200},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
    ]
  },
  {
    id: 24,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes no de Madrid',
    description: "Selecciona todos los clientes cuya ciudad no sea 'Madrid'.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad != 'Madrid'",
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
    ]
  },
  {
    id: 25,
    category: 'basico',
    subcategory: 'where',
    title: 'Pedidos con monto entre 50 y 150',
    description: "Selecciona todos los pedidos cuyo monto esté entre 50 y 150.",
    correctQuery: "SELECT * FROM pedidos WHERE monto BETWEEN 50 AND 150",
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 26,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes con edad menor o igual a 28',
    description: "Selecciona todos los clientes con edad menor o igual a 28.",
    correctQuery: "SELECT * FROM clientes WHERE edad <= 28",
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
    ]
  },
  {
    id: 27,
    category: 'basico',
    subcategory: 'where',
    title: 'Pedidos no asociados al cliente 1',
    description: "Selecciona todos los pedidos que no pertenecen al cliente con id 1.",
    correctQuery: "SELECT * FROM pedidos WHERE cliente_id != 1",
    expectedResult: [
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 28,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes que no viven en Barcelona ni en Valencia',
    description: "Selecciona clientes que no viven en Barcelona ni en Valencia.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad NOT IN ('Barcelona', 'Valencia')",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 29,
    category: 'basico',
    subcategory: 'where',
    title: 'Pedidos con monto diferente de 75',
    description: "Selecciona todos los pedidos cuyo monto sea diferente a 75.",
    correctQuery: "SELECT * FROM pedidos WHERE monto != 75",
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 3, cliente_id: 1, fecha: '2023-02-05', monto: 200},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 30,
    category: 'basico',
    subcategory: 'where',
    title: 'Clientes con edad entre 25 y 35',
    description: "Selecciona todos los clientes cuya edad esté entre 25 y 35 inclusive.",
    correctQuery: "SELECT * FROM clientes WHERE edad BETWEEN 25 AND 35",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },

////// 10 ejercios de AND, OR , NOT
  {
    id: 31,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes de Madrid y mayores de 25',
    description: "Selecciona clientes cuya ciudad sea 'Madrid' AND cuya edad sea mayor a 25.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad = 'Madrid' AND edad > 25",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 32,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes de Madrid o Barcelona',
    description: "Selecciona clientes cuya ciudad sea 'Madrid' OR 'Barcelona'.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad = 'Madrid' OR ciudad = 'Barcelona'",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 5, nombre: 'Elena', ciudad: 'Madrid', edad: 22},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 33,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes NO de Madrid',
    description: "Selecciona clientes que NO vivan en Madrid.",
    correctQuery: "SELECT * FROM clientes WHERE NOT ciudad = 'Madrid'",
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
    ]
  },
  {
    id: 34,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes de Madrid y edad entre 25 y 30',
    description: "Selecciona clientes de Madrid AND con edad entre 25 y 30 inclusive.",
    correctQuery: "SELECT * FROM clientes WHERE ciudad = 'Madrid' AND edad BETWEEN 25 AND 30",
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 8, nombre: 'Miguel', ciudad: 'Madrid', edad: 27},
      {id: 10, nombre: 'Pedro', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 35,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes de Barcelona o Valencia y mayores de 30',
    description: "Selecciona clientes que vivan en Barcelona OR Valencia AND edad mayor a 30.",
    correctQuery: "SELECT * FROM clientes WHERE (ciudad = 'Barcelona' OR ciudad = 'Valencia') AND edad > 30",
    expectedResult: [
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
    ]
  },
  {
    id: 36,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Pedidos con monto mayor a 50 y menor a 200',
    description: "Selecciona pedidos cuyo monto sea mayor a 50 AND menor a 200.",
    correctQuery: "SELECT * FROM pedidos WHERE monto > 50 AND monto < 200",
    expectedResult: [
      {id: 1, cliente_id: 1, fecha: '2023-01-10', monto: 100},
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 37,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Pedidos NO con monto 100 o 200',
    description: "Selecciona pedidos que NO tengan monto igual a 100 OR 200.",
    correctQuery: "SELECT * FROM pedidos WHERE NOT (monto = 100 OR monto = 200)",
    expectedResult: [
      {id: 2, cliente_id: 2, fecha: '2023-01-11', monto: 150},
      {id: 4, cliente_id: 3, fecha: '2023-02-10', monto: 50},
      {id: 5, cliente_id: 4, fecha: '2023-03-15', monto: 300},
      {id: 6, cliente_id: 5, fecha: '2023-03-20', monto: 250},
      {id: 7, cliente_id: 6, fecha: '2023-04-01', monto: 400},
      {id: 8, cliente_id: 7, fecha: '2023-04-15', monto: 120},
      {id: 9, cliente_id: 8, fecha: '2023-05-10', monto: 350},
      {id: 10, cliente_id: 9, fecha: '2023-05-20', monto: 80},
    ]
  },
  {
    id: 38,
    category: 'basico',
    subcategory: 'and_or_not',
    title: 'Clientes NO de Madrid y mayores de 25',
    description: "Selecciona clientes que NO sean de Madrid AND con edad mayor a 25.",
    correctQuery: "SELECT * FROM clientes WHERE NOT ciudad = 'Madrid' AND edad > 25",
    expectedResult: [
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 6, nombre: 'Carlos', ciudad: 'Barcelona', edad: 40},
      {id: 7, nombre: 'Sofia', ciudad: 'Valencia', edad: 33},
      {id: 9, nombre: 'Laura', ciudad: 'Sevilla', edad: 31},
    ]
  },


////// 10 EJERCIOS DE INSERT /////////

{
    id: 41,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar un nuevo cliente',
    description: "Inserta un nuevo cliente con nombre 'Carlos', ciudad 'Sevilla' y edad 40.",
    correctQuery: "INSERT INTO clientes (nombre, ciudad, edad) VALUES ('Carlos', 'Sevilla', 40)",
    expectedResult: []
  },
  {
    id: 42,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar un pedido para cliente 2',
    description: "Inserta un pedido con cliente_id 2 y monto 300.",
    correctQuery: "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (2, '2023-06-01', 300)",
    expectedResult: [
      {id: 11, cliente_id: 2, fecha: '2023-06-01', monto: 300},
    ]
  },
  {
    id: 43,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar cliente con nombre Ana María',
    description: "Inserta un cliente llamado 'Ana María' que viva en 'Bilbao' con edad 27.",
    correctQuery: "INSERT INTO clientes (nombre, ciudad, edad) VALUES ('Ana María', 'Bilbao', 27)",
    expectedResult: [
      {id: 11, nombre: 'Ana María', ciudad: 'Bilbao', edad: 27},
    ]
  },
  {
    id: 44,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar varios pedidos para cliente 1',
    description: "Inserta dos pedidos para cliente_id 1 con montos 400 y 500.",
    correctQuery: 
      "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (1, '2023-06-02', 400); " +
      "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (1, '2023-06-03', 500)",
    expectedResult: [
      {id: 12, cliente_id: 1, fecha: '2023-06-02', monto: 400},
      {id: 13, cliente_id: 1, fecha: '2023-06-03', monto: 500},
    ]
  },
  {
    id: 45,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar cliente con edad 22',
    description: "Inserta un cliente llamado 'Miguel' de ciudad 'Granada' con edad 22.",
    correctQuery: "INSERT INTO clientes (nombre, ciudad, edad) VALUES ('Miguel', 'Granada', 22)",
    expectedResult: [
      {id: 12, nombre: 'Miguel', ciudad: 'Granada', edad: 22},
    ]
  },
  {
    id: 46,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar pedido con monto 250 para cliente 4',
    description: "Inserta un pedido para cliente_id 4 con monto 250.",
    correctQuery: "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (4, '2023-06-04', 250)",
    expectedResult: [
      {id: 14, cliente_id: 4, fecha: '2023-06-04', monto: 250},
    ]
  },
  {
    id: 47,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar cliente con nombre "Laura"',
    description: "Inserta un cliente llamado 'Laura' que viva en 'Madrid' y tenga 29 años.",
    correctQuery: "INSERT INTO clientes (nombre, ciudad, edad) VALUES ('Laura', 'Madrid', 29)",
    expectedResult: [
      {id: 13, nombre: 'Laura', ciudad: 'Madrid', edad: 29},
    ]
  },
  {
    id: 48,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar pedido con monto 175 para cliente 3',
    description: "Inserta un pedido para cliente_id 3 con monto 175.",
    correctQuery: "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (3, '2023-06-05', 175)",
    expectedResult: [
      {id: 15, cliente_id: 3, fecha: '2023-06-05', monto: 175},
    ]
  },
  {
    id: 49,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar cliente llamado "Pedro"',
    description: "Inserta un cliente llamado 'Pedro' que viva en 'Valencia' con edad 33.",
    correctQuery: "INSERT INTO clientes (nombre, ciudad, edad) VALUES ('Pedro', 'Valencia', 33)",
    expectedResult: []
  },
  {
    id: 50,
    category: 'basico',
    subcategory: 'insert',
    title: 'Insertar pedido con monto 80 para cliente 2',
    description: "Inserta un pedido para cliente_id 2 con monto 80.",
    correctQuery: "INSERT INTO pedidos (cliente_id, fecha, monto) VALUES (2, '2023-06-06', 80)",
    expectedResult: [
      {id: 16, cliente_id: 2, fecha: '2023-06-06', monto: 80},
    ]
  },

////// 5 EJERICIOS DE CREATE ///////

  {
    id: 52,
    category: 'basico',
    subcategory: 'create',
    title: 'Crear tabla productos',
    description: 'Crea una tabla llamada productos con columnas id (INTEGER PRIMARY KEY), nombre (TEXT) y precio (REAL).',
    correctQuery: `
      CREATE TABLE productos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        precio REAL
      );
    `,
    expectedResult: []
  },
  {
    id: 53,
    category: 'basico',
    subcategory: 'create',
    title: 'Crear tabla empleados',
    description: 'Crea una tabla llamada empleados con columnas id (INTEGER PRIMARY KEY), nombre (TEXT), departamento (TEXT) y salario (REAL).',
    correctQuery: `
      CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        departamento TEXT,
        salario REAL
      );
    `,
    expectedResult: []
  },
  {
    id: 54,
    category: 'basico',
    subcategory: 'create',
    title: 'Crear tabla ventas',
    description: 'Crea una tabla llamada ventas con columnas id (INTEGER PRIMARY KEY), producto_id (INTEGER), cantidad (INTEGER), fecha (TEXT).',
    correctQuery: `
      CREATE TABLE ventas (
        id INTEGER PRIMARY KEY,
        producto_id INTEGER,
        cantidad INTEGER,
        fecha TEXT
      );
    `,
    expectedResult: []
  },
  {
    id: 55,
    category: 'basico',
    subcategory: 'create',
    title: 'Crear tabla departamentos',
    description: 'Crea una tabla llamada departamentos con columnas id (INTEGER PRIMARY KEY) y nombre (TEXT).',
    correctQuery: `
      CREATE TABLE departamentos (
        id INTEGER PRIMARY KEY,
        nombre TEXT
      );
    `,
    expectedResult: []
  },


//// 15 EJERCICIOS DE ALTER, UPDATE Y DELETE //////
{
    id: 56,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Agregar columna email a clientes',
    description: 'Agrega una columna llamada email de tipo TEXT a la tabla clientes.',
    correctQuery: `ALTER TABLE clientes ADD COLUMN email TEXT;`,
    expectedResult: []
  },
  {
    id: 57,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Agregar columna telefono a clientes',
    description: 'Agrega una columna llamada telefono de tipo TEXT a la tabla clientes.',
    correctQuery: `ALTER TABLE clientes ADD COLUMN telefono TEXT;`,
    expectedResult: []
  },
  {
    id: 58,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Agregar columna fecha_nacimiento a clientes',
    description: 'Agrega una columna llamada fecha_nacimiento de tipo TEXT a la tabla clientes.',
    correctQuery: `ALTER TABLE clientes ADD COLUMN fecha_nacimiento TEXT;`,
    expectedResult: []
  },
  // UPDATE
  {
    id: 59,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Actualizar ciudad de Luis a Sevilla',
    description: "Actualiza la ciudad del cliente 'Luis' a 'Sevilla'.",
    correctQuery: `UPDATE clientes SET ciudad = 'Sevilla' WHERE nombre = 'Luis';`,
    expectedResult: []
  },
  {
    id: 60,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Actualizar edad de Ana a 31',
    description: "Actualiza la edad del cliente 'Ana' a 31.",
    correctQuery: `UPDATE clientes SET edad = 31 WHERE nombre = 'Ana';`,
    expectedResult: []
  },
  {
    id: 61,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Actualizar ciudad de Jorge a Madrid',
    description: "Actualiza la ciudad del cliente 'Jorge' a 'Madrid'.",
    correctQuery: `UPDATE clientes SET ciudad = 'Madrid' WHERE nombre = 'Jorge';`,
    expectedResult: []
  },
  {
    id: 62,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Actualizar edad de Maria a 29',
    description: "Actualiza la edad del cliente 'Maria' a 29.",
    correctQuery: `UPDATE clientes SET edad = 29 WHERE nombre = 'Maria';`,
    expectedResult: []
  },
  {
    id: 63,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Actualizar ciudad de Ana a Valencia',
    description: "Actualiza la ciudad del cliente 'Ana' a 'Valencia'.",
    correctQuery: `UPDATE clientes SET ciudad = 'Valencia' WHERE nombre = 'Ana';`,
    expectedResult: []
  },
  // DELETE
  {
    id: 64,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar cliente Luis',
    description: "Elimina el cliente cuyo nombre es 'Luis'.",
    correctQuery: `DELETE FROM clientes WHERE nombre = 'Luis';`,
    expectedResult: []
  },
  {
    id: 65,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar clientes de Madrid',
    description: "Elimina todos los clientes cuya ciudad sea 'Madrid'.",
    correctQuery: `DELETE FROM clientes WHERE ciudad = 'Madrid';`,
    expectedResult: []
  },
  {
    id: 66,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar cliente con id 4',
    description: "Elimina el cliente con id igual a 4.",
    correctQuery: `DELETE FROM clientes WHERE id = 4;`,
    expectedResult: []
  },
  {
    id: 67,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar todos los clientes',
    description: "Elimina todos los registros de la tabla clientes.",
    correctQuery: `DELETE FROM clientes;`,
    expectedResult: []
  },
  {
    id: 68,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar clientes menores de 30 años',
    description: "Elimina todos los clientes con edad menor a 30.",
    correctQuery: `DELETE FROM clientes WHERE edad < 30;`,
    expectedResult: []
  },
  {
    id: 69,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar clientes mayores o iguales a 35 años',
    description: "Elimina todos los clientes con edad mayor o igual a 35.",
    correctQuery: `DELETE FROM clientes WHERE edad >= 35;`,
    expectedResult: []
  },
  {
    id: 70,
    category: 'basico',
    subcategory: 'alter_update_delete',
    title: 'Eliminar cliente llamado Maria',
    description: "Elimina el cliente cuyo nombre es 'Maria'.",
    correctQuery: `DELETE FROM clientes WHERE nombre = 'Maria';`,
    expectedResult: []
  },

/// 10 EJERICIOS DE LIMIT /////
{
    id: 71,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar los primeros 2 clientes',
    description: 'Selecciona todos los campos de la tabla clientes y limita el resultado a 2 filas.',
    correctQuery: 'SELECT * FROM clientes LIMIT 2;',
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
    ]
  },
  {
    id: 72,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar solo 1 cliente',
    description: 'Selecciona todos los campos y limita la salida a 1 fila.',
    correctQuery: 'SELECT * FROM clientes LIMIT 1;',
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
    ]
  },
  {
    id: 73,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar clientes saltando los primeros 2 (OFFSET)',
    description: 'Selecciona todos los campos de clientes, saltando las primeras 2 filas y mostrando las siguientes 2.',
    correctQuery: 'SELECT * FROM clientes LIMIT 2 OFFSET 2;',
    expectedResult: [
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
    ]
  },
  {
    id: 74,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar clientes ordenados por edad y limitar a 3',
    description: 'Selecciona todos los clientes ordenados por edad ascendente y limita la salida a 3.',
    correctQuery: 'SELECT * FROM clientes ORDER BY edad ASC LIMIT 3;',
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
    ]
  },
  {
    id: 75,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar 2 clientes más jóvenes',
    description: 'Selecciona los 2 clientes con menor edad.',
    correctQuery: 'SELECT * FROM clientes ORDER BY edad LIMIT 2;',
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
    ]
  },
  {
    id: 76,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar último cliente (orden descendente por id) limitado a 1',
    description: 'Selecciona el último cliente insertado (mayor id) usando LIMIT.',
    correctQuery: 'SELECT * FROM clientes ORDER BY id DESC LIMIT 1;',
    expectedResult: [
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
    ]
  },
  {
    id: 77,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar clientes desde el tercero (OFFSET)',
    description: 'Selecciona clientes saltando las dos primeras filas, sin límite en el número de resultados.',
    correctQuery: 'SELECT * FROM clientes LIMIT -1 OFFSET 2;', // SQLite acepta LIMIT -1 como sin límite
    expectedResult: [
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
    ]
  },
  {
    id: 78,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar solo 3 clientes con edad mayor a 25',
    description: 'Selecciona hasta 3 clientes cuya edad sea mayor que 25.',
    correctQuery: 'SELECT * FROM clientes WHERE edad > 25 LIMIT 3;',
    expectedResult: [
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
    ]
  },
  {
    id: 79,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar 2 clientes mayores de 27 años, ordenados por edad descendente',
    description: 'Selecciona hasta 2 clientes con edad mayor a 27, ordenados por edad descendente.',
    correctQuery: 'SELECT * FROM clientes WHERE edad > 27 ORDER BY edad DESC LIMIT 2;',
    expectedResult: [
      {id: 4, nombre: 'Jorge', ciudad: 'Valencia', edad: 35},
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
    ]
  },
  {
    id: 80,
    category: 'basico',
    subcategory: 'limit',
    title: 'Mostrar clientes ordenados por ciudad, limitando a 3',
    description: 'Selecciona clientes ordenados alfabéticamente por ciudad, mostrando solo los primeros 3.',
    correctQuery: 'SELECT * FROM clientes ORDER BY ciudad ASC LIMIT 3;',
    expectedResult: [
      {id: 2, nombre: 'Luis', ciudad: 'Barcelona', edad: 25},
      {id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30},
      {id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28},
    ]
  },

/// 10 EJERICIOS DE MIN, MAX ,AVG , SUM Y LIKE 
{
    id: 81,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Obtener la edad mínima de los clientes',
    description: 'Usa la función MIN para encontrar la edad más baja de todos los clientes.',
    correctQuery: 'SELECT MIN(edad) AS edad_minima FROM clientes;',
    expectedResult: [{ edad_minima: 25 }]
  },
  {
    id: 82,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Obtener la edad máxima de los clientes',
    description: 'Usa la función MAX para encontrar la edad más alta de todos los clientes.',
    correctQuery: 'SELECT MAX(edad) AS edad_maxima FROM clientes;',
    expectedResult: [{ edad_maxima: 35 }]
  },
  {
    id: 83,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Contar el número total de clientes',
    description: 'Usa la función COUNT para contar cuántos clientes hay en la tabla.',
    correctQuery: 'SELECT COUNT(*) AS total_clientes FROM clientes;',
    expectedResult: [{ total_clientes: 4 }]
  },
  {
    id: 84,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Calcular la edad promedio de los clientes',
    description: 'Usa la función AVG para obtener la edad promedio de los clientes.',
    correctQuery: 'SELECT AVG(edad) AS edad_promedio FROM clientes;',
    expectedResult: [{ edad_promedio: 29.5 }]
  },
  {
    id: 85,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Sumar todas las edades de los clientes',
    description: 'Usa la función SUM para sumar las edades de todos los clientes.',
    correctQuery: 'SELECT SUM(edad) AS suma_edades FROM clientes;',
    expectedResult: [{ suma_edades: 118 }]
  },
  {
    id: 86,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Contar clientes cuya ciudad contenga la letra "a"',
    description: 'Usa LIKE para filtrar clientes cuya ciudad tenga la letra "a" y cuenta cuántos hay.',
    correctQuery: "SELECT COUNT(*) AS total FROM clientes WHERE ciudad LIKE '%a%';",
    expectedResult: [{ total: 3 }]
  },
  {
    id: 87,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Listar clientes cuya ciudad empiece con "M"',
    description: 'Usa LIKE para obtener los clientes cuya ciudad comienza con "M".',
    correctQuery: "SELECT * FROM clientes WHERE ciudad LIKE 'M%';",
    expectedResult: [
      { id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30 },
      { id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28 }
    ]
  },
  {
    id: 88,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Listar clientes cuyo nombre termine en "a"',
    description: 'Usa LIKE para obtener los clientes cuyo nombre termina en "a".',
    correctQuery: "SELECT * FROM clientes WHERE nombre LIKE '%a';",
    expectedResult: [
      { id: 1, nombre: 'Ana', ciudad: 'Madrid', edad: 30 },
      { id: 3, nombre: 'Maria', ciudad: 'Madrid', edad: 28 }
    ]
  },
  {
    id: 89,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Contar clientes con edad mayor o igual a 30',
    description: 'Usa COUNT y una condición para contar clientes con edad >= 30.',
    correctQuery: 'SELECT COUNT(*) AS total FROM clientes WHERE edad >= 30;',
    expectedResult: [{ total: 2 }]
  },
  {
    id: 90,
    category: 'basico',
    subcategory: 'funciones_basicas',
    title: 'Calcular suma de edades de clientes de Madrid',
    description: 'Usa SUM para sumar edades de clientes que viven en Madrid.',
    correctQuery: "SELECT SUM(edad) AS suma_edades FROM clientes WHERE ciudad = 'Madrid';",
    expectedResult: [{ suma_edades: 58 }]
  },

//////// JOINNNNNNN !!!!! ///////
{
    id: 91,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Mostrar todos los clientes con sus pedidos (JOIN simple)',
    description: 'Haz un JOIN entre clientes y pedidos para mostrar nombre del cliente y monto del pedido.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto 
      FROM clientes 
      JOIN pedidos ON clientes.id = pedidos.cliente_id 
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Laura', monto: 80 }
    ]
  },
  {
    id: 92,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Listar clientes y sus pedidos, incluyendo clientes sin pedidos (LEFT JOIN)',
    description: 'Usa LEFT JOIN para mostrar todos los clientes y sus pedidos si existen.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto 
      FROM clientes 
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id 
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Laura', monto: 80 },
      { nombre: 'Pedro', monto: null }  // Cliente sin pedido
    ]
  },
  {
    id: 93,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Listar pedidos con nombre del cliente, solo pedidos con cliente válido (INNER JOIN)',
    description: 'Usa INNER JOIN para mostrar sólo pedidos que tienen cliente válido.',
    correctQuery: `
      SELECT pedidos.monto, clientes.nombre 
      FROM pedidos 
      INNER JOIN clientes ON pedidos.cliente_id = clientes.id 
      ORDER BY pedidos.id;`,
    expectedResult: [
      { monto: 100, nombre: 'Ana' },
      { monto: 150, nombre: 'Luis' },
      { monto: 200, nombre: 'Ana' },
      { monto: 50, nombre: 'Maria' },
      { monto: 300, nombre: 'Jorge' },
      { monto: 250, nombre: 'Elena' },
      { monto: 400, nombre: 'Carlos' },
      { monto: 120, nombre: 'Sofia' },
      { monto: 350, nombre: 'Miguel' },
      { monto: 80, nombre: 'Laura' }
    ]
  },
  {
    id: 94,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Contar cuántos pedidos tiene cada cliente',
    description: 'Usa JOIN y GROUP BY para contar pedidos por cliente.',
    correctQuery: `
      SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_pedidos: 2 },
      { nombre: 'Luis', total_pedidos: 1 },
      { nombre: 'Maria', total_pedidos: 1 },
      { nombre: 'Jorge', total_pedidos: 1 },
      { nombre: 'Elena', total_pedidos: 1 },
      { nombre: 'Carlos', total_pedidos: 1 },
      { nombre: 'Sofia', total_pedidos: 1 },
      { nombre: 'Miguel', total_pedidos: 1 },
      { nombre: 'Laura', total_pedidos: 1 },
      { nombre: 'Pedro', total_pedidos: 0 }
    ]
  },
  {
    id: 95,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Mostrar clientes y el monto total de sus pedidos',
    description: 'Usa JOIN y SUM para sumar los montos de los pedidos por cliente.',
    correctQuery: `
      SELECT clientes.nombre, SUM(pedidos.monto) AS total_monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_monto: 300 },
      { nombre: 'Luis', total_monto: 150 },
      { nombre: 'Maria', total_monto: 50 },
      { nombre: 'Jorge', total_monto: 300 },
      { nombre: 'Elena', total_monto: 250 },
      { nombre: 'Carlos', total_monto: 400 },
      { nombre: 'Sofia', total_monto: 120 },
      { nombre: 'Miguel', total_monto: 350 },
      { nombre: 'Laura', total_monto: 80 },
      { nombre: 'Pedro', total_monto: null }
    ]
  },
  {
    id: 96,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Listar clientes con pedidos mayores a 200',
    description: 'Usa JOIN y WHERE para filtrar pedidos mayores a 200.',
    correctQuery: `
      SELECT DISTINCT clientes.nombre
      FROM clientes
      JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE pedidos.monto > 200
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Elena' },
      { nombre: 'Jorge' },
      { nombre: 'Carlos' },
      { nombre: 'Miguel' }
    ]
  },
  {
    id: 97,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Listar clientes sin pedidos',
    description: 'Lista clientes que no tienen pedidos con LEFT JOIN y filtro.',
    correctQuery: `
      SELECT nombre FROM clientes
      WHERE id NOT IN (SELECT cliente_id FROM pedidos);`,
    expectedResult: [
      { nombre: 'Pedro' }
    ]
  },
  {
    id: 98,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Mostrar pedidos junto al nombre y ciudad del cliente',
    description: 'Usa JOIN para mostrar pedidos con nombre y ciudad de clientes.',
    correctQuery: `
      SELECT pedidos.monto, clientes.nombre, clientes.ciudad
      FROM pedidos
      JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY pedidos.id;`,
    expectedResult: [
      { monto: 100, nombre: 'Ana', ciudad: 'Madrid' },
      { monto: 150, nombre: 'Luis', ciudad: 'Barcelona' },
      { monto: 200, nombre: 'Ana', ciudad: 'Madrid' },
      { monto: 50, nombre: 'Maria', ciudad: 'Madrid' },
      { monto: 300, nombre: 'Jorge', ciudad: 'Valencia' },
      { monto: 250, nombre: 'Elena', ciudad: 'Madrid' },
      { monto: 400, nombre: 'Carlos', ciudad: 'Barcelona' },
      { monto: 120, nombre: 'Sofia', ciudad: 'Valencia' },
      { monto: 350, nombre: 'Miguel', ciudad: 'Madrid' },
      { monto: 80, nombre: 'Laura', ciudad: 'Sevilla' }
    ]
  },
  {
    id: 99,
    category: 'intermedio',
    subcategory: 'join',
    title: 'Mostrar pedidos y clientes ordenados por fecha',
    description: 'Une pedidos y clientes, mostrando nombre, monto y fecha ordenados por fecha.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto, pedidos.fecha
      FROM pedidos
      JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY pedidos.fecha;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100, fecha: '2023-01-10' },
      { nombre: 'Luis', monto: 150, fecha: '2023-01-11' },
      { nombre: 'Ana', monto: 200, fecha: '2023-02-05' },
      { nombre: 'Maria', monto: 50, fecha: '2023-02-10' },
      { nombre: 'Jorge', monto: 300, fecha: '2023-03-15' },
      { nombre: 'Elena', monto: 250, fecha: '2023-03-20' },
      { nombre: 'Carlos', monto: 400, fecha: '2023-04-01' },
      { nombre: 'Sofia', monto: 120, fecha: '2023-04-15' },
      { nombre: 'Miguel', monto: 350, fecha: '2023-05-10' },
      { nombre: 'Laura', monto: 80, fecha: '2023-05-20' }
    ]
  },

/////// 10 DE INNER JOIN //////
{
    id: 100,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar clientes y sus pedidos',
    description: 'Muestra nombre del cliente y monto del pedido usando INNER JOIN.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Laura', monto: 80 }
    ]
  },
  {
    id: 101,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar pedidos y nombre de cliente',
    description: 'Muestra monto y nombre del cliente para cada pedido usando INNER JOIN.',
    correctQuery: `
      SELECT pedidos.monto, clientes.nombre
      FROM pedidos
      INNER JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY pedidos.id;`,
    expectedResult: [
      { monto: 100, nombre: 'Ana' },
      { monto: 150, nombre: 'Luis' },
      { monto: 200, nombre: 'Ana' },
      { monto: 50, nombre: 'Maria' },
      { monto: 300, nombre: 'Jorge' },
      { monto: 250, nombre: 'Elena' },
      { monto: 400, nombre: 'Carlos' },
      { monto: 120, nombre: 'Sofia' },
      { monto: 350, nombre: 'Miguel' },
      { monto: 80, nombre: 'Laura' }
    ]
  },
  {
    id: 102,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Clientes con pedidos mayores a 200',
    description: 'Lista los nombres de clientes con pedidos que tengan monto mayor a 200.',
    correctQuery: `
      SELECT DISTINCT clientes.nombre
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE pedidos.monto > 200
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Carlos' },
      { nombre: 'Elena' },
      { nombre: 'Jorge' },
      { nombre: 'Miguel' }
    ]
  },
  {
    id: 103,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Contar pedidos por cliente',
    description: 'Cuenta cuántos pedidos tiene cada cliente usando INNER JOIN.',
    correctQuery: `
      SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_pedidos: 2 },
      { nombre: 'Luis', total_pedidos: 1 },
      { nombre: 'Maria', total_pedidos: 1 },
      { nombre: 'Jorge', total_pedidos: 1 },
      { nombre: 'Elena', total_pedidos: 1 },
      { nombre: 'Carlos', total_pedidos: 1 },
      { nombre: 'Sofia', total_pedidos: 1 },
      { nombre: 'Miguel', total_pedidos: 1 },
      { nombre: 'Laura', total_pedidos: 1 }
    ]
  },
  {
    id: 104,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Total monto de pedidos por cliente',
    description: 'Suma el monto total de pedidos para cada cliente usando INNER JOIN.',
    correctQuery: `
      SELECT clientes.nombre, SUM(pedidos.monto) AS total_monto
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_monto: 300 },
      { nombre: 'Luis', total_monto: 150 },
      { nombre: 'Maria', total_monto: 50 },
      { nombre: 'Jorge', total_monto: 300 },
      { nombre: 'Elena', total_monto: 250 },
      { nombre: 'Carlos', total_monto: 400 },
      { nombre: 'Sofia', total_monto: 120 },
      { nombre: 'Miguel', total_monto: 350 },
      { nombre: 'Laura', total_monto: 80 }
    ]
  },
  {
    id: 105,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar clientes y fechas de sus pedidos',
    description: 'Lista el nombre del cliente y la fecha de sus pedidos usando INNER JOIN.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.fecha
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY pedidos.fecha;`,
    expectedResult: [
      { nombre: 'Ana', fecha: '2023-01-10' },
      { nombre: 'Luis', fecha: '2023-01-11' },
      { nombre: 'Ana', fecha: '2023-02-05' },
      { nombre: 'Maria', fecha: '2023-02-10' },
      { nombre: 'Jorge', fecha: '2023-03-15' },
      { nombre: 'Elena', fecha: '2023-03-20' },
      { nombre: 'Carlos', fecha: '2023-04-01' },
      { nombre: 'Sofia', fecha: '2023-04-15' },
      { nombre: 'Miguel', fecha: '2023-05-10' },
      { nombre: 'Laura', fecha: '2023-05-20' }
    ]
  },
  {
    id: 106,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar clientes y monto de pedidos ordenados por monto',
    description: 'Lista nombre y monto de pedidos, ordenados de menor a mayor monto.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY pedidos.monto ASC;`,
    expectedResult: [
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Laura', monto: 80 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Carlos', monto: 400 }
    ]
  },
  {
    id: 107,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar clientes y pedidos con monto entre 100 y 300',
    description: 'Filtra los pedidos con monto entre 100 y 300.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE pedidos.monto BETWEEN 100 AND 300
      ORDER BY pedidos.monto;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 }
    ]
  },
  {
    id: 108,
    category: 'intermedio',
    subcategory: 'inner_join',
    title: 'INNER JOIN - Mostrar clientes y pedidos para clientes de Madrid',
    description: 'Filtra clientes que viven en Madrid y muestra sus pedidos.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE clientes.ciudad = 'Madrid'
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Miguel', monto: 350 }
    ]
  },

   {
    id: 109,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar todos los clientes y sus pedidos (si tienen)',
    description: 'Lista todos los clientes y sus pedidos, mostrando NULL si no tienen pedido.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Laura', monto: 80 },
      { nombre: 'Pedro', monto: null }
    ]
  },
  {
    id: 110,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Contar pedidos por cliente, incluyendo clientes sin pedidos',
    description: 'Cuenta pedidos por cliente, mostrando 0 para clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_pedidos: 2 },
      { nombre: 'Luis', total_pedidos: 1 },
      { nombre: 'Maria', total_pedidos: 1 },
      { nombre: 'Jorge', total_pedidos: 1 },
      { nombre: 'Elena', total_pedidos: 1 },
      { nombre: 'Carlos', total_pedidos: 1 },
      { nombre: 'Sofia', total_pedidos: 1 },
      { nombre: 'Miguel', total_pedidos: 1 },
      { nombre: 'Laura', total_pedidos: 1 },
      { nombre: 'Pedro', total_pedidos: 0 }
    ]
  },
  {
    id: 111,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Sumar montos de pedidos por cliente',
    description: 'Suma los montos de pedidos por cliente, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, SUM(pedidos.monto) AS total_monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_monto: 300 },
      { nombre: 'Luis', total_monto: 150 },
      { nombre: 'Maria', total_monto: 50 },
      { nombre: 'Jorge', total_monto: 300 },
      { nombre: 'Elena', total_monto: 250 },
      { nombre: 'Carlos', total_monto: 400 },
      { nombre: 'Sofia', total_monto: 120 },
      { nombre: 'Miguel', total_monto: 350 },
      { nombre: 'Laura', total_monto: 80 },
      { nombre: 'Pedro', total_monto: null }
    ]
  },
  {
    id: 112,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes y pedidos mayores a 200',
    description: 'Mostrar clientes con pedidos mayores a 200, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id AND pedidos.monto > 200
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Ana', monto: null },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Laura', monto: null },
      { nombre: 'Luis', monto: null },
      { nombre: 'Maria', monto: null },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Pedro', monto: null },
      { nombre: 'Sofia', monto: null }
    ]
  },
  {
    id: 113,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes y fechas de sus pedidos',
    description: 'Lista todos los clientes y las fechas de sus pedidos (si tienen).',
    correctQuery: `
      SELECT clientes.nombre, pedidos.fecha
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', fecha: '2023-01-10' },
      { nombre: 'Ana', fecha: '2023-02-05' },
      { nombre: 'Luis', fecha: '2023-01-11' },
      { nombre: 'Maria', fecha: '2023-02-10' },
      { nombre: 'Jorge', fecha: '2023-03-15' },
      { nombre: 'Elena', fecha: '2023-03-20' },
      { nombre: 'Carlos', fecha: '2023-04-01' },
      { nombre: 'Sofia', fecha: '2023-04-15' },
      { nombre: 'Miguel', fecha: '2023-05-10' },
      { nombre: 'Laura', fecha: '2023-05-20' },
      { nombre: 'Pedro', fecha: null }
    ]
  },
  {
    id: 114,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes y ciudad junto con pedido (si tienen)',
    description: 'Muestra cliente, ciudad y monto del pedido (si tienen).',
    correctQuery: `
      SELECT clientes.nombre, clientes.ciudad, pedidos.monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', ciudad: 'Madrid', monto: 100 },
      { nombre: 'Ana', ciudad: 'Madrid', monto: 200 },
      { nombre: 'Luis', ciudad: 'Barcelona', monto: 150 },
      { nombre: 'Maria', ciudad: 'Madrid', monto: 50 },
      { nombre: 'Jorge', ciudad: 'Valencia', monto: 300 },
      { nombre: 'Elena', ciudad: 'Madrid', monto: 250 },
      { nombre: 'Carlos', ciudad: 'Barcelona', monto: 400 },
      { nombre: 'Sofia', ciudad: 'Valencia', monto: 120 },
      { nombre: 'Miguel', ciudad: 'Madrid', monto: 350 },
      { nombre: 'Laura', ciudad: 'Sevilla', monto: 80 },
      { nombre: 'Pedro', ciudad: 'Madrid', monto: null }
    ]
  },
  {
    id: 115,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes y pedidos ordenados por monto',
    description: 'Lista todos los clientes con sus pedidos ordenados por monto, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      ORDER BY pedidos.monto;`,
    expectedResult: [
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Laura', monto: 80 },
      { nombre: 'Sofia', monto: 120 },
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Pedro', monto: null }
    ]
  },
  {
    id: 116,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes con pedidos o sin pedidos en Madrid',
    description: 'Muestra todos los clientes que viven en Madrid con sus pedidos si los tienen.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE clientes.ciudad = 'Madrid'
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Pedro', monto: null }
    ]
  },
  {
    id: 117,
    category: 'intermedio',
    subcategory: 'left_join',
    title: 'LEFT JOIN - Mostrar clientes sin pedidos (filtro con IS NULL)',
    description: 'Mostrar clientes que no tienen pedidos.',
    correctQuery: `
      SELECT clientes.nombre
      FROM clientes
      LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
      WHERE pedidos.id IS NULL;`,
    expectedResult: [
      { nombre: 'Pedro' }
    ]
  },



  ////// 10 ejericios de GITH JOIN///////
{
    id: 118,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Mostrar todos los pedidos y sus clientes (si existen)',
    description: 'Lista todos los pedidos y los nombres de los clientes, mostrando NULL si no tienen cliente.',
    correctQuery: `
      SELECT pedidos.id, pedidos.monto, clientes.nombre
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY pedidos.id;`,
    expectedResult: [
      // En esta base no hay pedidos sin cliente, resultado igual a INNER JOIN
      { id: 1, monto: 100, nombre: 'Ana' },
      { id: 2, monto: 150, nombre: 'Luis' },
      { id: 3, monto: 200, nombre: 'Ana' },
      { id: 4, monto: 50, nombre: 'Maria' },
      { id: 5, monto: 300, nombre: 'Jorge' },
      { id: 6, monto: 250, nombre: 'Elena' },
      { id: 7, monto: 400, nombre: 'Carlos' },
      { id: 8, monto: 120, nombre: 'Sofia' },
      { id: 9, monto: 350, nombre: 'Miguel' },
      { id: 10, monto: 80, nombre: 'Laura' }
    ]
  },
  {
    id: 119,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Mostrar todos los pedidos, sin importar si cliente existe',
    description: 'Muestra todos los pedidos, mostrando NULL en cliente si no existe.',
    correctQuery: `
      SELECT pedidos.id, pedidos.fecha, clientes.nombre
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY pedidos.fecha;`,
    expectedResult: [
      { id: 1, fecha: '2023-01-10', nombre: 'Ana' },
      { id: 2, fecha: '2023-01-11', nombre: 'Luis' },
      { id: 3, fecha: '2023-02-05', nombre: 'Ana' },
      { id: 4, fecha: '2023-02-10', nombre: 'Maria' },
      { id: 5, fecha: '2023-03-15', nombre: 'Jorge' },
      { id: 6, fecha: '2023-03-20', nombre: 'Elena' },
      { id: 7, fecha: '2023-04-01', nombre: 'Carlos' },
      { id: 8, fecha: '2023-04-15', nombre: 'Sofia' },
      { id: 9, fecha: '2023-05-10', nombre: 'Miguel' },
      { id: 10, fecha: '2023-05-20', nombre: 'Laura' }
    ]
  },
  {
    id: 120,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Clientes con pedidos mayores a 200',
    description: 'Muestra clientes y sus pedidos mayores a 200, incluyendo pedidos sin clientes.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id AND pedidos.monto > 200
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Ana', monto: null },
      { nombre: 'Laura', monto: null },
      { nombre: 'Luis', monto: null },
      { nombre: 'Maria', monto: null },
      { nombre: 'Pedro', monto: null },
      { nombre: 'Sofia', monto: null }
    ]
  },
  {
    id: 121,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Contar pedidos por cliente',
    description: 'Cuenta pedidos por cliente, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_pedidos: 2 },
      { nombre: 'Luis', total_pedidos: 1 },
      { nombre: 'Maria', total_pedidos: 1 },
      { nombre: 'Jorge', total_pedidos: 1 },
      { nombre: 'Elena', total_pedidos: 1 },
      { nombre: 'Carlos', total_pedidos: 1 },
      { nombre: 'Sofia', total_pedidos: 1 },
      { nombre: 'Miguel', total_pedidos: 1 },
      { nombre: 'Laura', total_pedidos: 1 },
      { nombre: 'Pedro', total_pedidos: 0 }
    ]
  },
  {
    id: 122,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Suma montos de pedidos por cliente',
    description: 'Suma montos de pedidos por cliente, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, SUM(pedidos.monto) AS total_monto
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      GROUP BY clientes.id
      ORDER BY clientes.id;`,
    expectedResult: [
      { nombre: 'Ana', total_monto: 300 },
      { nombre: 'Luis', total_monto: 150 },
      { nombre: 'Maria', total_monto: 50 },
      { nombre: 'Jorge', total_monto: 300 },
      { nombre: 'Elena', total_monto: 250 },
      { nombre: 'Carlos', total_monto: 400 },
      { nombre: 'Sofia', total_monto: 120 },
      { nombre: 'Miguel', total_monto: 350 },
      { nombre: 'Laura', total_monto: 80 },
      { nombre: 'Pedro', total_monto: null }
    ]
  },
  {
    id: 123,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Mostrar pedidos y nombres de clientes para pedidos recientes',
    description: 'Mostrar pedidos y clientes con fecha después de 2023-03-01, incluyendo pedidos sin cliente.',
    correctQuery: `
      SELECT pedidos.id, pedidos.fecha, clientes.nombre
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      WHERE pedidos.fecha > '2023-03-01'
      ORDER BY pedidos.fecha;`,
    expectedResult: [
      { id: 6, fecha: '2023-03-20', nombre: 'Elena' },
      { id: 7, fecha: '2023-04-01', nombre: 'Carlos' },
      { id: 8, fecha: '2023-04-15', nombre: 'Sofia' },
      { id: 9, fecha: '2023-05-10', nombre: 'Miguel' },
      { id: 10, fecha: '2023-05-20', nombre: 'Laura' }
    ]
  },
  {
    id: 124,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Clientes y pedidos con monto entre 100 y 300',
    description: 'Mostrar clientes y sus pedidos con monto entre 100 y 300, incluyendo clientes sin pedidos.',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      WHERE pedidos.monto BETWEEN 100 AND 300
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: null },
      { nombre: 'Miguel', monto: null },
      { nombre: 'Pedro', monto: null },
      { nombre: 'Sofia', monto: null },
      { nombre: 'Carlos', monto: null },
      { nombre: 'Laura', monto: null }
    ]
  },
  {
    id: 125,
    category: 'intermedio',
    subcategory: 'right_join',
    title: 'RIGHT JOIN - Mostrar clientes y pedidos sin importar si tienen pedido',
    description: 'Muestra todos los clientes con pedidos o sin ellos (similar a LEFT JOIN).',
    correctQuery: `
      SELECT clientes.nombre, pedidos.monto
      FROM pedidos
      RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id
      ORDER BY clientes.nombre;`,
    expectedResult: [
      { nombre: 'Ana', monto: 100 },
      { nombre: 'Ana', monto: 200 },
      { nombre: 'Carlos', monto: 400 },
      { nombre: 'Elena', monto: 250 },
      { nombre: 'Jorge', monto: 300 },
      { nombre: 'Laura', monto: 80 },
      { nombre: 'Luis', monto: 150 },
      { nombre: 'Maria', monto: 50 },
      { nombre: 'Miguel', monto: 350 },
      { nombre: 'Pedro', monto: null },
      { nombre: 'Sofia', monto: 120 }
    ]
  },

 {
    id: 126,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de clientes y su gasto total',
    description: 'Crea una vista llamada vista_clientes_gasto que muestre el id, nombre del cliente y la suma total de monto de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_clientes_gasto AS
      SELECT c.id, c.nombre, IFNULL(SUM(p.monto), 0) AS total_gasto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.id, c.nombre
    `,
    expectedResult: []
  },



  {
    id: 127,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de pedidos mayores a 150',
    description: 'Crea una vista llamada vista_pedidos_grandes que muestre los pedidos con monto mayor a 150.',
    correctQuery: `
      CREATE VIEW vista_pedidos_grandes AS
      SELECT * FROM pedidos WHERE monto > 150
    `,
    expectedResult: []
  },
  {
    id: 128,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de clientes con ciudad y cantidad de pedidos',
    description: 'Crea una vista llamada vista_clientes_pedidos_ciudad que muestre nombre, ciudad y cantidad de pedidos por cliente.',
    correctQuery: `
      CREATE VIEW vista_clientes_pedidos_ciudad AS
      SELECT c.nombre, c.ciudad, COUNT(p.id) AS cantidad_pedidos
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.id, c.nombre, c.ciudad
    `,
    expectedResult: []
  },
  {
    id: 129,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes que tienen pedidos',
    description: 'Crea una vista llamada vista_clientes_con_pedidos que muestre solo clientes que tengan al menos un pedido.',
    correctQuery: `
      CREATE VIEW vista_clientes_con_pedidos AS
      SELECT DISTINCT c.id, c.nombre
      FROM clientes c
      INNER JOIN pedidos p ON c.id = p.cliente_id
    `,
    expectedResult: []
  },
  {
    id: 130,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con pedidos y nombre del cliente',
    description: 'Crea una vista llamada vista_pedidos_con_cliente que muestre id de pedido, fecha, monto y nombre del cliente.',
    correctQuery: `
      CREATE VIEW vista_pedidos_con_cliente AS
      SELECT p.id, p.fecha, p.monto, c.nombre
      FROM pedidos p
      JOIN clientes c ON p.cliente_id = c.id
    `,
    expectedResult: []
  },
  {
    id: 131,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con promedio de monto por cliente',
    description: 'Crea una vista llamada vista_promedio_monto_cliente que muestre cliente y promedio de monto de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_promedio_monto_cliente AS
      SELECT c.nombre, AVG(p.monto) AS promedio_monto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.nombre
    `,
    expectedResult: []
  },
  {
    id: 132,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes sin pedidos',
    description: 'Crea una vista llamada vista_clientes_sin_pedidos que muestre los clientes que no tienen pedidos registrados.',
    correctQuery: `
      CREATE VIEW vista_clientes_sin_pedidos AS
      SELECT c.id, c.nombre
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      WHERE p.id IS NULL
    `,
    expectedResult: []
  },
  {
    id: 133,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de pedidos recientes',
    description: 'Crea una vista llamada vista_pedidos_recientes que muestre pedidos realizados en el último mes (considera fecha > "2023-04-20").',
    correctQuery: `
      CREATE VIEW vista_pedidos_recientes AS
      SELECT * FROM pedidos WHERE fecha > '2023-04-20'
    `,
    expectedResult: []
  },
  {
    id: 134,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes y monto máximo de pedido',
    description: 'Crea una vista llamada vista_monto_maximo_cliente que muestre cliente y el monto máximo de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_monto_maximo_cliente AS
      SELECT c.nombre, MAX(p.monto) AS max_monto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.nombre
    `,
    expectedResult: []
  },
  {
    id: 135,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con conteo de clientes por ciudad',
    description: 'Crea una vista llamada vista_clientes_por_ciudad que muestre ciudad y cantidad de clientes en cada una.',
    correctQuery: `
      CREATE VIEW vista_clientes_por_ciudad AS
      SELECT ciudad, COUNT(*) AS total_clientes
      FROM clientes
      GROUP BY ciudad
    `,
    expectedResult: []
  },

   {
    id: 126,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de clientes y su gasto total',
    description: 'Crea una vista llamada vista_clientes_gasto que muestre el id, nombre del cliente y la suma total de monto de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_clientes_gasto AS
      SELECT c.id, c.nombre, IFNULL(SUM(p.monto), 0) AS total_gasto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.id, c.nombre
    `,
    expectedResult: []
  },
  {
    id: 127,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de pedidos mayores a 150',
    description: 'Crea una vista llamada vista_pedidos_grandes que muestre los pedidos con monto mayor a 150.',
    correctQuery: `
      CREATE VIEW vista_pedidos_grandes AS
      SELECT * FROM pedidos WHERE monto > 150
    `,
    expectedResult: []
  },
  {
    id: 128,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de clientes con ciudad y cantidad de pedidos',
    description: 'Crea una vista llamada vista_clientes_pedidos_ciudad que muestre nombre, ciudad y cantidad de pedidos por cliente.',
    correctQuery: `
      CREATE VIEW vista_clientes_pedidos_ciudad AS
      SELECT c.nombre, c.ciudad, COUNT(p.id) AS cantidad_pedidos
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.id, c.nombre, c.ciudad
    `,
    expectedResult: []
  },
  {
    id: 129,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes que tienen pedidos',
    description: 'Crea una vista llamada vista_clientes_con_pedidos que muestre solo clientes que tengan al menos un pedido.',
    correctQuery: `
      CREATE VIEW vista_clientes_con_pedidos AS
      SELECT DISTINCT c.id, c.nombre
      FROM clientes c
      INNER JOIN pedidos p ON c.id = p.cliente_id
    `,
    expectedResult: []
  },
  {
    id: 130,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con pedidos y nombre del cliente',
    description: 'Crea una vista llamada vista_pedidos_con_cliente que muestre id de pedido, fecha, monto y nombre del cliente.',
    correctQuery: `
      CREATE VIEW vista_pedidos_con_cliente AS
      SELECT p.id, p.fecha, p.monto, c.nombre
      FROM pedidos p
      JOIN clientes c ON p.cliente_id = c.id
    `,
    expectedResult: []
  },
  {
    id: 131,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con promedio de monto por cliente',
    description: 'Crea una vista llamada vista_promedio_monto_cliente que muestre cliente y promedio de monto de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_promedio_monto_cliente AS
      SELECT c.nombre, AVG(p.monto) AS promedio_monto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.nombre
    `,
    expectedResult: []
  },
  {
    id: 132,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes sin pedidos',
    description: 'Crea una vista llamada vista_clientes_sin_pedidos que muestre los clientes que no tienen pedidos registrados.',
    correctQuery: `
      CREATE VIEW vista_clientes_sin_pedidos AS
      SELECT c.id, c.nombre
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      WHERE p.id IS NULL
    `,
    expectedResult: []
  },
  {
    id: 133,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista de pedidos recientes',
    description: 'Crea una vista llamada vista_pedidos_recientes que muestre pedidos realizados en el último mes (considera fecha > "2023-04-20").',
    correctQuery: `
      CREATE VIEW vista_pedidos_recientes AS
      SELECT * FROM pedidos WHERE fecha > '2023-04-20'
    `,
    expectedResult: []
  },
  {
    id: 134,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con clientes y monto máximo de pedido',
    description: 'Crea una vista llamada vista_monto_maximo_cliente que muestre cliente y el monto máximo de sus pedidos.',
    correctQuery: `
      CREATE VIEW vista_monto_maximo_cliente AS
      SELECT c.nombre, MAX(p.monto) AS max_monto
      FROM clientes c
      LEFT JOIN pedidos p ON c.id = p.cliente_id
      GROUP BY c.nombre
    `,
    expectedResult: []
  },
  {
    id: 135,
    category: 'avanzado',
    subcategory: 'views',
    title: 'Vista con conteo de clientes por ciudad',
    description: 'Crea una vista llamada vista_clientes_por_ciudad que muestre ciudad y cantidad de clientes en cada una.',
    correctQuery: `
      CREATE VIEW vista_clientes_por_ciudad AS
      SELECT ciudad, COUNT(*) AS total_clientes
      FROM clientes
      GROUP BY ciudad
    `,
    expectedResult: []
  },



{
    id: 146,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función para calcular descuento del 10%',
    description: 'Crea una función llamada `calcular_descuento` que reciba un monto y devuelva el monto con 10% de descuento.',
    correctQuery: `
      CREATE FUNCTION calcular_descuento(monto DECIMAL(10,2))
      RETURNS DECIMAL(10,2)
      DETERMINISTIC
      BEGIN
        RETURN monto * 0.9;
      END;
    `,
    expectedResult: []
  },
  {
    id: 147,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que retorna el año de una fecha',
    description: 'Crea una función llamada `obtener_anio` que reciba una fecha y devuelva solo el año.',
    correctQuery: `
      CREATE FUNCTION obtener_anio(fecha DATE)
      RETURNS INT
      DETERMINISTIC
      BEGIN
        RETURN YEAR(fecha);
      END;
    `,
    expectedResult: []
  },
  {
    id: 148,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que devuelve edad promedio de clientes',
    description: 'Crea una función llamada `edad_promedio_clientes` que devuelva la edad promedio de los clientes.',
    correctQuery: `
      CREATE FUNCTION edad_promedio_clientes()
      RETURNS DECIMAL(5,2)
      DETERMINISTIC
      BEGIN
        DECLARE promedio DECIMAL(5,2);
        SELECT AVG(edad) INTO promedio FROM clientes;
        RETURN promedio;
      END;
    `,
    expectedResult: []
  },
  {
    id: 149,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que devuelve monto total de pedidos de un cliente',
    description: 'Crea una función llamada `total_pedidos_cliente` que reciba un id de cliente y devuelva el total de sus pedidos.',
    correctQuery: `
      CREATE FUNCTION total_pedidos_cliente(cid INT)
      RETURNS DECIMAL(10,2)
      DETERMINISTIC
      BEGIN
        DECLARE total DECIMAL(10,2);
        SELECT SUM(monto) INTO total FROM pedidos WHERE cliente_id = cid;
        RETURN IFNULL(total, 0);
      END;
    `,
    expectedResult: []
  },
  {
    id: 150,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que clasifica edad',
    description: 'Crea una función llamada `clasificar_edad` que reciba una edad y devuelva "Joven", "Adulto" o "Mayor".',
    correctQuery: `
      CREATE FUNCTION clasificar_edad(edad INT)
      RETURNS VARCHAR(10)
      DETERMINISTIC
      BEGIN
        IF edad < 30 THEN
          RETURN 'Joven';
        ELSEIF edad < 60 THEN
          RETURN 'Adulto';
        ELSE
          RETURN 'Mayor';
        END IF;
      END;
    `,
    expectedResult: []
  },
  {
    id: 151,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que retorna número de pedidos de un cliente',
    description: 'Crea una función llamada `numero_pedidos` que reciba un id de cliente y devuelva la cantidad de pedidos.',
    correctQuery: `
      CREATE FUNCTION numero_pedidos(cid INT)
      RETURNS INT
      DETERMINISTIC
      BEGIN
        DECLARE total INT;
        SELECT COUNT(*) INTO total FROM pedidos WHERE cliente_id = cid;
        RETURN total;
      END;
    `,
    expectedResult: []
  },
  {
    id: 152,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que determina si un cliente es de Madrid',
    description: 'Crea una función llamada `es_de_madrid` que reciba un id de cliente y devuelva TRUE si es de Madrid.',
    correctQuery: `
      CREATE FUNCTION es_de_madrid(cid INT)
      RETURNS BOOLEAN
      DETERMINISTIC
      BEGIN
        DECLARE ciudad_cliente TEXT;
        SELECT ciudad INTO ciudad_cliente FROM clientes WHERE id = cid;
        RETURN ciudad_cliente = 'Madrid';
      END;
    `,
    expectedResult: []
  },
  {
    id: 153,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función para sumar dos montos',
    description: 'Crea una función `suma_montos` que reciba dos números y devuelva su suma.',
    correctQuery: `
      CREATE FUNCTION suma_montos(a DECIMAL(10,2), b DECIMAL(10,2))
      RETURNS DECIMAL(10,2)
      DETERMINISTIC
      BEGIN
        RETURN a + b;
      END;
    `,
    expectedResult: []
  },
  {
    id: 154,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función para verificar si el monto es mayor a 200',
    description: 'Crea una función llamada `es_monto_alto` que reciba un monto y devuelva TRUE si es mayor a 200.',
    correctQuery: `
      CREATE FUNCTION es_monto_alto(m DECIMAL(10,2))
      RETURNS BOOLEAN
      DETERMINISTIC
      BEGIN
        RETURN m > 200;
      END;
    `,
    expectedResult: []
  },
  {
    id: 155,
    category: 'avanzado',
    subcategory: 'funciones',
    title: 'Función que devuelve el nombre completo: nombre + ciudad',
    description: 'Crea una función `nombre_completo` que reciba id del cliente y devuelva "Nombre - Ciudad".',
    correctQuery: `
      CREATE FUNCTION nombre_completo(cid INT)
      RETURNS VARCHAR(100)
      DETERMINISTIC
      BEGIN
        DECLARE resultado VARCHAR(100);
        SELECT nombre || ' - ' || ciudad INTO resultado FROM clientes WHERE id = cid;
        RETURN resultado;
      END;
    `,
    expectedResult: []
  },

  /////// 10 DE PROCEDIMIENTOS ///////

{
    id: 156,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Crear procedimiento para insertar cliente',
    description: 'Crea un procedimiento llamado `insertar_cliente` que reciba nombre, ciudad y edad, e inserte un nuevo cliente.',
    correctQuery: `
      CREATE PROCEDURE insertar_cliente(nom TEXT, ciu TEXT, edad INT)
      BEGIN
        INSERT INTO clientes (nombre, ciudad, edad)
        VALUES (nom, ciu, edad);
      END;
    `,
    expectedResult: []
  },
  {
    id: 157,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Crear procedimiento para actualizar edad de un cliente',
    description: 'Crea un procedimiento `actualizar_edad` que reciba el ID de un cliente y una nueva edad, y la actualice.',
    correctQuery: `
      CREATE PROCEDURE actualizar_edad(cid INT, nueva_edad INT)
      BEGIN
        UPDATE clientes
        SET edad = nueva_edad
        WHERE id = cid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 158,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Eliminar cliente por ID',
    description: 'Crea un procedimiento llamado `eliminar_cliente` que reciba un ID y elimine ese cliente.',
    correctQuery: `
      CREATE PROCEDURE eliminar_cliente(cid INT)
      BEGIN
        DELETE FROM clientes WHERE id = cid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 159,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Insertar pedido nuevo',
    description: 'Crea un procedimiento `insertar_pedido` que reciba cliente_id, fecha y monto e inserte un nuevo pedido.',
    correctQuery: `
      CREATE PROCEDURE insertar_pedido(cid INT, fecha TEXT, monto INT)
      BEGIN
        INSERT INTO pedidos (cliente_id, fecha, monto)
        VALUES (cid, fecha, monto);
      END;
    `,
    expectedResult: []
  },
  {
    id: 160,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Actualizar ciudad de un cliente',
    description: 'Crea un procedimiento `cambiar_ciudad` que reciba un ID de cliente y nueva ciudad.',
    correctQuery: `
      CREATE PROCEDURE cambiar_ciudad(cid INT, nueva_ciudad TEXT)
      BEGIN
        UPDATE clientes
        SET ciudad = nueva_ciudad
        WHERE id = cid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 161,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Obtener total de pedidos de un cliente',
    description: 'Crea un procedimiento `total_pedidos` que reciba ID de cliente e imprima el total de sus pedidos.',
    correctQuery: `
      CREATE PROCEDURE total_pedidos(cid INT)
      BEGIN
        SELECT SUM(monto) AS total FROM pedidos WHERE cliente_id = cid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 162,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Ver clientes de una ciudad',
    description: 'Crea un procedimiento `clientes_por_ciudad` que reciba una ciudad y liste los clientes de esa ciudad.',
    correctQuery: `
      CREATE PROCEDURE clientes_por_ciudad(ciudad TEXT)
      BEGIN
        SELECT * FROM clientes WHERE ciudad = ciudad;
      END;
    `,
    expectedResult: []
  },
  {
    id: 163,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Eliminar todos los pedidos de un cliente',
    description: 'Crea un procedimiento `eliminar_pedidos_cliente` que reciba un ID de cliente y borre todos sus pedidos.',
    correctQuery: `
      CREATE PROCEDURE eliminar_pedidos_cliente(cid INT)
      BEGIN
        DELETE FROM pedidos WHERE cliente_id = cid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 164,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Actualizar monto de pedido',
    description: 'Crea un procedimiento `cambiar_monto_pedido` que reciba el ID del pedido y un nuevo monto.',
    correctQuery: `
      CREATE PROCEDURE cambiar_monto_pedido(pid INT, nuevo_monto INT)
      BEGIN
        UPDATE pedidos
        SET monto = nuevo_monto
        WHERE id = pid;
      END;
    `,
    expectedResult: []
  },
  {
    id: 165,
    category: 'avanzado',
    subcategory: 'procedimientos',
    title: 'Listar clientes mayores de una edad',
    description: 'Crea un procedimiento `clientes_mayores` que reciba una edad mínima y liste los clientes mayores a esa edad.',
    correctQuery: `
      CREATE PROCEDURE clientes_mayores(edad_min INT)
      BEGIN
        SELECT * FROM clientes WHERE edad > edad_min;
      END;
    `,
    expectedResult: []
  },

////// 10 EJERCIIUOS DE TRIGGER ////
{
    id: 166,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger al insertar cliente',
    description: 'Crea un trigger que muestre un mensaje al insertar un cliente nuevo.',
    correctQuery: `
      CREATE TRIGGER nuevo_cliente
      AFTER INSERT ON clientes
      BEGIN
        SELECT 'Cliente insertado exitosamente' AS mensaje;
      END;
    `,
    expectedResult: []
  },
  {
    id: 167,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger para registrar cambios de edad',
    description: 'Crea un trigger que registre cuando se actualiza la edad de un cliente.',
    correctQuery: `
      CREATE TRIGGER log_edad
      AFTER UPDATE ON clientes
      WHEN OLD.edad != NEW.edad
      BEGIN
        SELECT 'Edad modificada' AS mensaje;
      END;
    `,
    expectedResult: []
  },
  {
    id: 168,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger al eliminar cliente',
    description: 'Crea un trigger que muestre un mensaje cuando se elimina un cliente.',
    correctQuery: `
      CREATE TRIGGER eliminar_cliente
      BEFORE DELETE ON clientes
      BEGIN
        SELECT 'Se va a eliminar un cliente' AS aviso;
      END;
    `,
    expectedResult: []
  },
  {
    id: 169,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger al insertar pedido con monto alto',
    description: 'Muestra un mensaje si el pedido tiene un monto mayor a 300.',
    correctQuery: `
      CREATE TRIGGER pedido_grande
      AFTER INSERT ON pedidos
      WHEN NEW.monto > 300
      BEGIN
        SELECT 'Pedido de alto valor' AS alerta;
      END;
    `,
    expectedResult: []
  },
  {
    id: 170,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger para evitar edad negativa',
    description: 'Evita que se inserte un cliente con edad menor a 0.',
    correctQuery: `
      CREATE TRIGGER validar_edad
      BEFORE INSERT ON clientes
      WHEN NEW.edad < 0
      BEGIN
        SELECT 'Edad inválida' AS error;
      END;
    `,
    expectedResult: []
  },
  {
    id: 171,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger para log de pedidos',
    description: 'Crea un trigger que muestre un mensaje al modificar un pedido.',
    correctQuery: `
      CREATE TRIGGER log_mod_pedido
      AFTER UPDATE ON pedidos
      BEGIN
        SELECT 'Pedido actualizado' AS log;
      END;
    `,
    expectedResult: []
  },
  {
    id: 172,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger si cambia ciudad',
    description: 'Muestra un mensaje si la ciudad del cliente cambia.',
    correctQuery: `
      CREATE TRIGGER cambio_ciudad
      AFTER UPDATE ON clientes
      WHEN OLD.ciudad != NEW.ciudad
      BEGIN
        SELECT 'Ciudad modificada' AS alerta;
      END;
    `,
    expectedResult: []
  },
  {
    id: 173,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger si monto de pedido es 0',
    description: 'Muestra advertencia si se inserta pedido con monto 0.',
    correctQuery: `
      CREATE TRIGGER monto_cero
      BEFORE INSERT ON pedidos
      WHEN NEW.monto = 0
      BEGIN
        SELECT 'Monto no puede ser 0' AS advertencia;
      END;
    `,
    expectedResult: []
  },
  {
    id: 174,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger para auditoría de eliminación de pedidos',
    description: 'Muestra mensaje al eliminar un pedido.',
    correctQuery: `
      CREATE TRIGGER eliminar_pedido
      AFTER DELETE ON pedidos
      BEGIN
        SELECT 'Pedido eliminado' AS log;
      END;
    `,
    expectedResult: []
  },
  {
    id: 175,
    category: 'avanzado',
    subcategory: 'triggers',
    title: 'Trigger de chequeo de edad al actualizar',
    description: 'Evita que edad sea menor a 18 al actualizar.',
    correctQuery: `
      CREATE TRIGGER validar_edad_actualizada
      BEFORE UPDATE ON clientes
      WHEN NEW.edad < 18
      BEGIN
        SELECT 'Edad mínima es 18' AS error;
      END;
    `,
    expectedResult: []
  },

];

let db;

// Estado actual
let currentCategory = 'basico';
let currentSubcategory = 'select';

// Inicializa la base de datos con sql.js
initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}` }).then(SQL => {
  db = new SQL.Database();
  db.run(initSQL);

  setupMenuListeners();

  // Render inicial
  renderExercises(currentCategory, currentSubcategory);
});

function renderExercises(category, subcategory) {
  const container = document.getElementById('exercises-container');
  container.innerHTML = '';
  
  const filtered = exercises.filter(e => e.category === category && e.subcategory === subcategory);
  
  if (filtered.length === 0) {
    container.innerHTML = '<p>No hay ejercicios para esta sección.</p>';
    return;
  }

  filtered.forEach(e => {
    const div = document.createElement('div');
    div.className = 'exercise';
    div.innerHTML = `
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <textarea class="sql-input" id="input-${e.id}" placeholder="Escribe aquí tu consulta SQL..."></textarea>
      <br>
      <button onclick="checkAnswer(${e.id})">Verificar</button>
      <button onclick="showAnswer(${e.id})" style="margin-left:10px;">Mostrar respuesta</button>
      <div id="result-${e.id}" class="result" style="display:none; margin-top: 10px;"></div>
      <pre id="answer-${e.id}" class="answer" style="
        display:none;
        background:#000000;
        color:#00aaff;
        padding:10px;
        margin-top:10px;
        white-space: pre-wrap;
        border-radius: 5px;
        font-weight: bold;
        font-family: monospace;
      "></pre>
    `;
    container.appendChild(div);
  });
}

function normalizeSQL(sql) {
  return sql.replace(/\s+/g, ' ').trim().toLowerCase();
}

// Función para comparar dos resultados (arrays de objetos)
function deepCompareResults(res1, res2) {
  if (res1.length !== res2.length) return false;
  for(let i = 0; i < res1.length; i++) {
    const row1 = res1[i];
    const row2 = res2[i];
    const keys1 = Object.keys(row1).sort();
    const keys2 = Object.keys(row2).sort();
    if (keys1.length !== keys2.length) return false;
    for(let k = 0; k < keys1.length; k++) {
      if(keys1[k] !== keys2[k]) return false;
      if(row1[keys1[k]] !== row2[keys2[k]]) return false;
    }
  }
  return true;
}

function checkAnswer(id) {
  const exercise = exercises.find(e => e.id === id);
  const userQuery = document.getElementById(`input-${id}`).value.trim();
  const resultDiv = document.getElementById(`result-${id}`);

  if (!userQuery) {
    resultDiv.style.display = 'block';
    resultDiv.className = 'result incorrect';
    resultDiv.textContent = 'Por favor, escribe una consulta SQL.';
    return;
  }

  try {
    // Normalizamos para comparar sin importar espacios ni mayúsculas
    const normalizedUser = normalizeSQL(userQuery);
    const normalizedCorrect = normalizeSQL(exercise.correctQuery);

    if (normalizedUser === normalizedCorrect) {
      // Ejecutamos la consulta (ejemplo: INSERT)
      db.run(userQuery);

      resultDiv.style.display = 'block';
      resultDiv.className = 'result correct';
      resultDiv.textContent = '¡Respuesta correcta! 🎉';
      return;
    }

    // Ejecutar consulta y comparar resultados (SELECT)
    const res = db.exec(userQuery);

    if (res.length === 0) {
      resultDiv.style.display = 'block';
      resultDiv.className = 'result incorrect';
      resultDiv.textContent = 'La consulta no devolvió resultados.';
      return;
    }

    const columns = res[0].columns;
    const values = res[0].values;

    const userResult = values.map(row => {
      let obj = {};
      for (let i = 0; i < columns.length; i++) {
        obj[columns[i]] = row[i];
      }
      return obj;
    });

    const correct = deepCompareResults(userResult, exercise.expectedResult);

    resultDiv.style.display = 'block';
    if (correct) {
      resultDiv.className = 'result correct';
      resultDiv.textContent = '¡Respuesta correcta! 🎉';
    } else {
      resultDiv.className = 'result incorrect';
      resultDiv.innerHTML = `Respuesta incorrecta.<br><b>Resultado esperado:</b><pre>${JSON.stringify(exercise.expectedResult, null, 2)}</pre>`;
    }
  } catch (err) {
    resultDiv.style.display = 'block';
    resultDiv.className = 'result incorrect';
    resultDiv.textContent = 'Error en la consulta SQL: ' + err.message;
  }
}

function showAnswer(id) {
  const exercise = exercises.find(e => e.id === id);
  const answerPre = document.getElementById(`answer-${id}`);

  if (answerPre.style.display === 'none') {
    answerPre.style.display = 'block';
    answerPre.textContent = exercise.correctQuery.trim();
  } else {
    answerPre.style.display = 'none';
  }
}


// Detecta clicks en subcategorías del menú
function setupMenuListeners() {
  // Quitar 'active' de todos al iniciar
  document.querySelectorAll('nav li.subcategory').forEach(i => i.classList.remove('active'));
  // Poner active al primer subcategoría del básico por defecto
  const first = document.querySelector('nav li.category[data-category="basico"] ul.subcategory-list li.subcategory');
  if (first) first.classList.add('active');

  document.querySelectorAll('nav li.subcategory').forEach(subcat => {
    subcat.addEventListener('click', () => {
      // Remover 'active' de todas subcategorías
      document.querySelectorAll('nav li.subcategory').forEach(i => i.classList.remove('active'));
      // Poner 'active' en la que clickeó
      subcat.classList.add('active');

      // Obtener categoría padre de esta subcategoría
      const categoryLi = subcat.closest('li.category');
      currentCategory = categoryLi.getAttribute('data-category');
      currentSubcategory = subcat.getAttribute('data-subcategory');

      renderExercises(currentCategory, currentSubcategory);
    });
  });
}
