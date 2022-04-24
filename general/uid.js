const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    return head + tail;
}

console.log(uid()); //l2dkb9wyweuz5p0g2co