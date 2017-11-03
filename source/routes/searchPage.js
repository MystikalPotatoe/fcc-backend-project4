import frontEnd from '../react/searchPage';

export default function (req, res) {
    const body = frontEnd();
    const title = 'Image Abstraction Layer';
    res.render('layout/template', { body, title });
}
