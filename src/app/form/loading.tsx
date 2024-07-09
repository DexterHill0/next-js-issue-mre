import LoadingScreen from "@/components/Loading";

/*

currently, if you navigate to the 404 page and then back, the header styles no longer apply correctly and it incorrectly show the loading spinner in place of the header

! REMOVE THIS FILE AND WATCH IT WORK CORRECTLY

go back to the 404, and then back again and it works as expected.

*/

const Loading = () => {
    return <LoadingScreen />;
};

export default Loading;
