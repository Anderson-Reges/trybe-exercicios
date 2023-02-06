const app = require('./app');

const PORT = 3002;

app.listen(PORT, async () => {
  console.log(`O server está sendo executada na porta ${PORT}`);
});
