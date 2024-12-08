import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';

const MovieModal = ({ isOpen, onClose, movie }) => {
    if (!movie) return null;

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-10">
            <DialogBackdrop className="absolute inset-0 bg-black/30" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">{movie.title}</DialogTitle>
                    <Description>{movie.overview}</Description>
                    <p>Released: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <div className="flex gap-4">
                        <button onClick={onClose}>Close</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default MovieModal;
