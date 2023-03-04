import Cors from 'cors';

const cors = Cors({
  origin: 'https://main.dc63qgugu7gnf.amplifyapp.com',
  methods: ['GET', 'HEAD'],
});

export default function corsMiddleware(req, res, next) {
  return cors(req, res, next);
}