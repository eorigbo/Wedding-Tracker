class WeddingsController < ApplicationController
  before_action :set_wedding, only: [:show, :edit, :update, :destroy]

  # GET /weddings
  # GET /weddings.json
  def index
    @weddings = Wedding.paginate(page: params[:page], per_page: 5)
  end

  # GET /weddings/1
  # GET /weddings/1.json
  def show
  end

  # GET /weddings/new
  def new
    #debugger
    @wedding = Wedding.new
  end

  # GET /weddings/1/edit
  def edit
  end

  # POST /weddings
  # POST /weddings.json
  def create
    #@wedding = Wedding.new(wedding:wedding, user: current_user)
    @wedding = Wedding.new(wedding_params)
    @wedding.user = current_user

    respond_to do |format|
      if @wedding.save
        format.html { redirect_to weddings_path, notice: 'Wedding was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /weddings/1
  # PATCH/PUT /weddings/1.json
  def update
    if !@wedding.user 
				@wedding.user = current_user	
    end
		
    respond_to do |format|
      if @wedding.update(wedding_params)
        format.html { redirect_to weddings_path, notice: 'Wedding was successfully updated.' }
        format.json { render :show, status: :ok, location: @wedding }
      else
        format.html { render :edit }
        format.json { render json: @wedding.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /weddings/1
  # DELETE /weddings/1.json
  def destroy
    @wedding.destroy
    respond_to do |format|
      format.html { redirect_to weddings_url, notice: 'Wedding was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wedding
      @wedding = Wedding.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wedding_params
      params.require(:wedding).permit(:bride, :groom, :wedding_type_id, :date, :location, :expected_guests)
    end
end
