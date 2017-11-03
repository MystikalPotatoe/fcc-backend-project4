import frontEnd from '../react/homePage';

export default function (req, res) {
    const body = frontEnd();
    const title = 'Image Abstraction Layer';
    res.render('layout/template', { body, title });
}
