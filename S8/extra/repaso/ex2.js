fetch('http://localhost:3000/diary')
.then (res => res.json())
.then (diary => {
    const sortedDiary = ordinaryNotes(diary);
})

const ordinaryNotes = (diary) => {
    return diary.sort ((a,b))
    new Date(a.date) - new Date (b.date)
} 
