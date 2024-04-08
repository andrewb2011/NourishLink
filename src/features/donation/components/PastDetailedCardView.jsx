import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

function PastDetailedCardView({ selectedPost, setSelectedPost, userRole }) {
  return (
    <Modal onClose={() => setSelectedPost(null)}>
      <h2 className="mb-2 text-lg font-bold">{selectedPost.title}</h2>
      <div className="p-4 mb-4 bg-[#FAC710] bg-opacity-15 border rounded-lg border-orange">
        <p className="mb-4 text-gray-700">{selectedPost.description}</p>
        <div className="flex gap-3">
          <div className="p-2 mb-4 border border-gray-500 rounded-sm">
            <div className="flex flex-col">
              <h3 className="text-sm">Posted:</h3>
              <div>
                <FontAwesomeIcon icon={faCalendar} className="" />{" "}
                <span>
                  {new Date(selectedPost.created_at).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "short",
                    }
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 mb-4 border border-gray-500 rounded-sm">
            <h3 className="text-sm">Claimed:</h3>
            <FontAwesomeIcon icon={faCalendar} className="" />{" "}
            <span>
              {new Date(selectedPost.claimed_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}
            </span>
          </div>
          <div className="relative flex items-center p-2 mb-4 border border-gray-500 rounded-sm">
            <div className="flex flex-col">
              <h3 className="text-sm">Posted by:</h3>
              {selectedPost.profiles.organization_name}
            </div>
          </div>
          <div className="flex items-center p-2 mb-4 border border-gray-500 rounded-sm">
            <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
            <div>Claimed</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="font-bold text-white rounded bg-orange hover:bg-[#E37410]">
          View Messages
        </Button>
      </div>
    </Modal>
  );
}

export default PastDetailedCardView;